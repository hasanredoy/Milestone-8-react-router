import { NavLink } from "react-router-dom";
import "./heder.css"

const Header = () => {
  return (
    <div>
      <nav className="sticky top-0">
        <div className="navbar bg-gray-400 container mx-auto rounded-xl ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <NavLink className={"text-lg font-bold text-purple-800 "} to="/">Home</NavLink>
              <NavLink className={"text-lg font-bold text-purple-800 "} to="/meals">Our Recipes </NavLink>
              <NavLink className={"text-lg font-bold text-purple-800 "} to="/about">About</NavLink>
              <NavLink className={"text-lg font-bold text-purple-800 "} to="/contact">Contact</NavLink>
              </ul>
            </div>
            <a className=" text-red-500 btn btn-ghost text-xl font-bold" title="Virtual Hotel">VH Hotel</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <NavLink className={"text-lg font-bold text-purple-800 mr-6"} to="/">Home</NavLink>
              <NavLink className={"text-lg font-bold text-purple-800 mr-6"} to="/meals">Our Recipes </NavLink>
              <NavLink className={"text-lg font-bold text-purple-800 mr-6"} to="/about">About</NavLink>
              <NavLink className={"text-lg font-bold text-purple-800 "} to="/contact">Contact</NavLink>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Sing Up</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;