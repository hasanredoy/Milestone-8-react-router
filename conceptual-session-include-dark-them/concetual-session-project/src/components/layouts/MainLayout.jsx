import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../footer/Footer";

import Loader from "../../loader/Loader";

const MainLayout = () => {
  const navigation = useNavigation()
  return (
    <div>
      <Nav></Nav>
       <div className="min-h-[calc(100vh-116px)]">
       {
        navigation.state === "loading" ?<Loader></Loader>:
      <Outlet></Outlet>
     
      }
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;