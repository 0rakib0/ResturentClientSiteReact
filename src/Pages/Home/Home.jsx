import Banner from "./Banner";
import Category from "./Category";
import FeatureItme from "./FeatureItem";
import PopularMenu from "./PopularMenu";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <FeatureItme></FeatureItme>
        </div>
    );
};

export default Home;