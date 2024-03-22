import Friend from "../frnd/Friend";

const Myself = () => {
  return (
    <div  className='border border-gray-500 rounded-lg p-5'>
      <h1>my self</h1>
      <div className="flex gap-2 my-2">
        <Friend></Friend>
      </div>
    </div>
  );
};

export default Myself;