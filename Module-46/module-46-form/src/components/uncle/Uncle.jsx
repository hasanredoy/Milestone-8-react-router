import Cousin from "../cousin/Cousin";

const Uncle = () => {
  return (
    <div className='border border-gray-500 rounded-lg p-5'>
      <h1>uncle</h1>
      <div className="flex gap-2 my-2">
      <Cousin cousin={1}></Cousin>
        <Cousin cousin={2}></Cousin>
      </div>
    </div>
  );
};

export default Uncle;