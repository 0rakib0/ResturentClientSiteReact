import Banner from "./Banner";
import Category from "./Category";
import FeatureItme from "./FeatureItem";
import PopularMenu from "./PopularMenu";
import TestMonials from "./TestMomonials";
import { Helmet} from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <h1>Hello Bangladesh</h1>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <FeatureItme></FeatureItme>
            <TestMonials></TestMonials>
        </div>
    );
};

export default Home;