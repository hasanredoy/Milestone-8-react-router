import Footer from "../components/Footer/Footer";
import Nav from "../components/nav/Nav";
import { Outlet } from 'react-router-dom';
const Layouts = () => {
  return (
    <div>
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  );
};

export default Layouts;