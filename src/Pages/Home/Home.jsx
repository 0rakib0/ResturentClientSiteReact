import Banner from "./Banner";
import Category from "./Category";
import FeatureItme from "./FeatureItem";
import PopularMenu from "./PopularMenu";
import TestMonials from "./TestMomonials";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <FeatureItme></FeatureItme>
            <TestMonials></TestMonials>
        </div>
    );
};

export default Home;