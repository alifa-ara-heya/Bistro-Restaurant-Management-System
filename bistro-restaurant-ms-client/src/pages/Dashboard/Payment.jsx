import { loadStripe } from "@stripe/stripe-js";
import Heading from './../../components/Heading';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {


    return (
        <div>
            <Heading heading="Payment" subHeading="Please pay to eat"></Heading>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};


/**
 * 1. install stripe and stripe react
 * 2. create card element 
 * 3. create stripe account and get publishable key
 * 4. use publishable key and use stripe to get card information and error
 * 5. create payment intent post on the server. and return client secret. install stripe on the server side and get client secret. make sure you used the payment method types: ['card']
 * 6. from client side get the client secret and save it. 
 * 7. use confirm card payment and pass user information, card and client secret
 * 8. display transaction id
 * 
*/

export default Payment;