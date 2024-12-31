import Cover from "../Shared/Cover";
import bannerImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import OrderTab from "./OrderTab";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";


const Order = () => {
    const categories = ['salad', 'pizza', 'soups', 'desserts', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)


    // const [tabIndex, setTabIndex] = useState(0);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');

    const soup = menu.filter(item => item.category === 'soup');

    const salad = menu.filter(item => item.category === 'salad');

    const drinks = menu.filter(item => item.category === 'drinks');

    console.log(category);
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover image={bannerImg} title={'Order Food'} subTitle={'Would you like to try a dish?'} />

            <Tabs
                defaultIndex={tabIndex}
                className='mb-8 mt-12 max-w-[1320px] mx-auto w-11/12'
                onSelect={(index) => setTabIndex(index)}
            >
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>

                {/* salad */}
                <TabPanel>
                    {/* <div className="grid grid-cols-1  md:grid-cols-3 gap-6 my-6">
                        {salad.map(item => <FoodCard key={item._id} item={item} />)}
                    </div> */}
                    <OrderTab items={salad} />
                </TabPanel>

                {/* pizza */}
                <TabPanel>
                    <OrderTab items={pizza} />
                </TabPanel>

                {/* soup */}
                <TabPanel>
                    <OrderTab items={soup} />
                </TabPanel>

                {/* dessert */}
                <TabPanel>
                    <OrderTab items={dessert} />
                </TabPanel>

                {/* drinks */}
                <TabPanel>
                    <OrderTab items={drinks} />
                </TabPanel>


            </Tabs>
        </div>
    );
};

export default Order;