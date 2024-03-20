import { Link, useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData()
  console.log(user);
  return (
    <div>
      <h1>User name: {user.name} </h1>
      <h1>user email: {user.email} </h1>
      <h1>user phone: {user.phone} </h1>
      <Link to="/">home</Link>
    </div>
  );
};

export default UserDetails;