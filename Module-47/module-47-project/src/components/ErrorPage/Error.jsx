import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center h-screen align-middle items-center">
      <h1 className="text-4xl font-black my-5">Page not Found....</h1>
      <NavLink to={"/"}><button className='btn btn-error'>Go Home</button></NavLink>
    </div>
  );
};

export default Error;