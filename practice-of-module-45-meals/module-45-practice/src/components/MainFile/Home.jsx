import { Outlet, useNavigation ,useLocation} from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Banner from "../banner/Banner";
import { useEffect } from "react";

const Home = () => {
  const location = useLocation()
  useEffect(()=>{
    if(location.pathname==="/"){
      document.title=`Chef Hub- Home`
    }else document.title=`Chef Hub  ${location.pathname.replace("/","_")}`

  },[location.pathname])
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