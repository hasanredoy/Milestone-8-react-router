
import { Outlet, useLocation } from 'react-router-dom';

import Footer from '../footer/Footer';
import Header from '../Header/Header';
// import { useEffect } from 'react';

const Root = () => {
 
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;