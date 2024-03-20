import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error);

  return (
    <div>
         <h2>Page Not found</h2>
         <p>{error.statusText || error.message}</p>
         {
          error.status === 404 && <div>
            <p>page not found </p>
            <p>want to go back home </p>
            <Link to="/"><button>Home</button></Link>
          </div>
         }
    </div>
  );
};

export default ErrorPage;