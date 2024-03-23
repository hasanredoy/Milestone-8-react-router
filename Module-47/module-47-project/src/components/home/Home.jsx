import FeaturedJob from "../FeaturedJob/FeaturedJob";
import Category from "../category/Category";

const Home = () => {
  return (
    <div>
     
      <Category></Category>
      <div className=" my-20">
      <FeaturedJob></FeaturedJob>
      </div>
    </div>
  );
};

export default Home;