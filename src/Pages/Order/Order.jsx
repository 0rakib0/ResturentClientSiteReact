
import { useState } from 'react';
import Cover from '../../SharePage/Cover';
import OrderCoverImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import FoodCard from './FoodCard';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';


const Order = () => {
    const categorys = ['salad', 'pizza', 'soup', 'desserts','drinks']
    const {category} = useParams()
    const initIndex = categorys.indexOf(category)
    const [TabIndex, setTabIndex] = useState([])
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Cover img={OrderCoverImg} title='OUR SHOP'></Cover>
            <Tabs defaultIndex={initIndex} onSelect={(index) => setTabIndex(index)} className='mt-12'>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUP</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINGKS</Tab>
                </TabList>
                <TabPanel>
                   <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;