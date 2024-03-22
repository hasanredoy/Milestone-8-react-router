import Brother from "../brother/Brother";
import Myself from "../myself/Myself";
import Sister from "../sister/Sister";


const Dad = () => {
  return (
    <div className='border border-gray-500 rounded-lg p-5'>
      <h1>dad</h1>
      <div className="flex gap-2 my-2">
        <Myself></Myself>
        <Brother/>
        <Sister/>
      </div>
    </div>
  );
};

export default Dad;