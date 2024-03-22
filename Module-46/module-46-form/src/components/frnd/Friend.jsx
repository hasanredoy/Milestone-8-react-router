import { useContext } from "react";
import { contextProperty } from "../../grandpa/Grandpa";

  
const Friend = () => {
 const gift = useContext(contextProperty)
  return (
    <div className='border border-gray-500 rounded-lg p-5'>
      <h1>Friend</h1>
       <h1>{gift}</h1>
    </div>
  );
};

export default Friend;