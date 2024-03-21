import { Link, NavLink, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError()
  return (
    <div className=" flex h-screen justify-center flex-col items-center space-y-5 ">
         <h1 className="font-bold text-2xl text-center">Something Went Wrong Page Not Found</h1>
        {
          error.status ===404 &&  <Link to="/"><button className="btn btn-error">Go Home</button></Link>
        }
    </div>
  );
};

export default Error;