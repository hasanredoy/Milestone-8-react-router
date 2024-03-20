import { NavLink } from "react-router-dom";
import "./header.css"
const Header = () => {
  return (
    <div>
         <nav>
          <ul>
            {/* <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a> */}
            <span>My Website</span>
            {/* showing active router via adding style  */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/users">Users</Link>
            <Link to="/posts">Posts</Link> */}
          </ul>
         </nav>
    </div>
  );
};

export default Header;