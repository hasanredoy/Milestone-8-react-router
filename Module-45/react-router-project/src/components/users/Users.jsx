import { useLoaderData } from "react-router-dom";
import User from "../user/User";
import "./Users.css"


const Users = () => {
  const loadData = useLoaderData()
  return (
    <div>
        <h1>Form User page {loadData.length}</h1>
      <div className="users">
      {
          loadData.map(data => <User key={data.id} user={data}></User>)
        }
      </div>
    </div>
  );
};

export default Users;