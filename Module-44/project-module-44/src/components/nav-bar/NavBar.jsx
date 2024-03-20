import { useState } from "react";
import Link from "../link/Link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const NavBar = () => {
  const [open, setOpen]=useState(false)
  const routes = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Services', path: '/services' },
    { id: 4, name: 'Contact', path: '/contact' },
    { id: 5, name: 'Blog', path: '/blog' }
  ];
  return (
    <nav className="bg-slate-500">
      <div
      // setting the value of state opposite 
        onClick={()=>setOpen(!open)} 
       className="md:hidden text-2xl">
        {
          // showing icons base on state conditions
          open
          ?<MdClose></MdClose>
          :<GiHamburgerMenu />
          
        }
      
      </div>
      <ul className={ `md:flex  gap-5 absolute md:static z-50 bg-slate-500 text-xl text-white pt-2 pb-2 px-6  m-2 md:m-0 md:p-5 duration-1000 ${open?'top-6':'-top-80 md:justify-center'}`}>
        {
          routes.map(route => <Link key={route.id} route={route}></Link>)
        }
        
      </ul>
    </nav>
  );
};

export default NavBar;