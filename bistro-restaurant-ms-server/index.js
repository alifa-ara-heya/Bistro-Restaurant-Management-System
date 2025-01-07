const express = require('express');
const app = express();
require('dotenv').config();
const jwt = require('jsonwebtoken')
const cors = require('cors');
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kvlax.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        const menuCollection = client.db('bistroDB').collection('menu');
        const userCollection = client.db('bistroDB').collection('users');
        const reviewsCollection = client.db('bistroDB').collection('reviews');
        const cartCollection = client.db('bistroDB').collection('carts');

        //jwt related api
        app.post('/jwt', async (req, res) => {
            const user = req.body;
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '7h'
            })
            res.send({ token })
        })

        const verifyToken = (req, res, next) => {
            console.log('inside verify token', req.headers.authorization);
            if (!req.headers.authorization) {
                return res.status(401).send({ message: 'unauthorized access' })
            }
            const token = req.headers.authorization.split(' ')[1];

            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
                if (err) {
                    return res.status(401).send({ message: 'unauthorized access' })
                }
                req.decoded = decoded;
                next();
            })
        }

        //use verify admin after verifying token, jar token se truly admin kina
        const verifyAdmin = async (req, res, next) => {
            const email = req.decoded.email;
            const query = { email: email }
            const user = await userCollection.findOne(query);
            const isAdmin = user?.role === 'admin'
            if (!isAdmin) {
                return res.status(403).send({ message: 'forbidden access' })
            }
            next();
        }

        //users related api
        //verifyToken is not enough, because any logged in person can type http://localhost:5173/dashboard/users and see the list of users. so not only we need to stop loading data here, but also need to protect the route by adding verifyAdmin
        app.get('/users', verifyToken, verifyAdmin, async (req, res) => {
            // console.log(req.headers); //make sure the access token in your local storage matches the console in your terminal 'Bearer----'
            const result = await userCollection.find().toArray();
            res.send(result)
        })

        //
        app.get('/users/admin/:email', verifyToken, async (req, res) => {
            const email = req.params.email;
            // console.log('req.params.email', req.params.email);
            // console.log('req.decoded.email', req.decoded.email);

            //we need to check this type of email verification multiple times, so better to make another middleware.
            if (email !== req.decoded.email) {
                return res.status(403).send({ message: 'Forbidden access' })
            }

            const query = { email: email };
            const user = await userCollection.findOne(query);
            let admin = false;
            if (user) {
                admin = user?.role === 'admin';
            }
            res.send({ admin })
        })

        app.post('/users', async (req, res) => {
            const user = req.body;
            //insert email if user doesn't exist
            //it can be done in many ways- (1. making email unique like index, 2. upsert 3. simple checking)

            const query = { email: user.email }
            const existingUser = await userCollection.findOne(query)
            if (existingUser) {
                return res.send({ message: 'User already exists', insertedId: null })
            }

            const result = await userCollection.insertOne(user);
            res.send(result)
        })

        app.delete('/users/:id', verifyToken, verifyAdmin, async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await userCollection.deleteOne(query);
            res.send(result)
        })

        //give the user an admin role
        //add verifyAdmin, verifyToken, after you make an user admin
        app.patch('/users/admin/:id', verifyToken, verifyAdmin, async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const updatedDoc = {
                $set: {
                    role: 'admin'
                }
            }
            const result = await userCollection.updateOne(filter, updatedDoc)
            res.send(result)
        })




        app.get('/menu', async (req, res) => {
            const result = await menuCollection.find().toArray();
            res.send(result)
        })

        //why verifyToken is not enough here, because he is also a verifiedUser, so wee need to confirm if he is admin to add menu.
        app.post('/menu', verifyToken, verifyAdmin, async (req, res) => {
            const item = req.body;
            const result = await menuCollection.insertOne(item);
            res.send(result)
        })

        app.delete('/menu/:id', verifyToken, verifyAdmin, async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await menuCollection.deleteOne(query);
            res.send(result);
        })

        //for updating, we need individual data of an item, secure korleo hoy, na kolreo hoy, karon ekhane just data load hocche
        app.get('/menu/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await menuCollection.findOne(query);
            res.send(result)
        })

        app.patch('/menu/:id', async (req, res) => {
            const item = req.body;
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const updatedDoc = {
                $set: {
                    name: item.name,
                    category: item.category,
                    price: item.price,
                    recipe: item.recipe,
                    image: item.image,
                }
            }

            const result = await menuCollection.updateOne(filter, updatedDoc)
            res.send(result)
        })


        app.get('/reviews', async (req, res) => {
            const result = await reviewsCollection.find().toArray();
            res.send(result)
        })

        //carts collection
        app.post('/carts', async (req, res) => {
            const cartItem = req.body;
            const result = await cartCollection.insertOne(cartItem);
            res.send(result)
        })

        app.get('/carts', async (req, res) => {
            const email = req.query.email;
            const query = { email: email } //it will search for email from the email field
            const result = await cartCollection.find(query).toArray();
            res.send(result)
        })

        //delete cart item
        app.delete('/carts/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await cartCollection.deleteOne(query);
            res.send(result)
        })

        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('boss is here')
})

app.listen(port, () => {
    console.log('Bistro boss is sitting on port', port);
})



/**
 * --------------------------------
 *      NAMING CONVENTION
 * --------------------------------
 * app.get('/users')
 * app.get('/users/:id')
 * app.post('/users')
 * app.put('/users/:id')
 * app.patch('/users/:id')
 * app.delete('/users/:id')
 * 
*/