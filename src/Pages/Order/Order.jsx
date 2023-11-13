
import { useState } from 'react';
import Cover from '../../SharePage/Cover';
import OrderCoverImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Order = () => {
    const [TabIndex, setTabIndex] = useState([])
    return (
        <div>
            <Cover img={OrderCoverImg} title='OUR SHOP'></Cover>
            <Tabs defaultIndex={TabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUP</Tab>
                    <Tab>DESSERTS</Tab> 
                    <Tab>DRINGKS</Tab> 
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;