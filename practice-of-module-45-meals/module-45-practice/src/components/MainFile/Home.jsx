import { Outlet, useNavigation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Banner from "../banner/Banner";

const Home = () => {
  const navigation = useNavigation()
  return (
    <div>
      <div className=" sticky top-0 z-50">
      <Header></Header>
       </div>
       <div className=" container mx-auto my-16">
       <Banner></Banner>
       </div>
      {
        navigation.state==="loading"?<h1 className="text-3xl text-center font-bold">Loading.....</h1>:
        <Outlet></Outlet>
        }
      <Footer></Footer>
    </div>
  );
};

export default Home;