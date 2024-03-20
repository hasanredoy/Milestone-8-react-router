import { Outlet, useNavigation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Home = () => {
  const navigation = useNavigation()
  console.log(navigation);
  return (
    <div>
      <Header></Header>
      {
        navigation.state === "loading"?'loading.....'
        :<Outlet></Outlet>
      }
      
      <Footer></Footer>
    </div>
  );
};

export default Home;