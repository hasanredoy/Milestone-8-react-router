import { Link } from "react-router-dom";


const User = ({user}) => {
  const userStyle = {
    margin:"10px",
    padding:"20px",
    border: "2px solid gray"
  }
  return (
    <div style={userStyle}>
      <h4>Name: {user.name}</h4>
      <h4>Number: {user.phone}</h4>
      <Link to={`/user/${user.id}`}>Show Details</Link>
    </div>
  );
};

export default User;