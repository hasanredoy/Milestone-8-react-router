import Features from "../features/Features";

const Option = ({ option }) => {
  const features = option.features
  return (
    <div className="border border-purple-400 p-5 m-2 bg-rose-200 flex flex-col rounded-lg">
      <div className=" space-y-4 my-5">
        <h2 className="text-2xl"><span className="text-5xl font-black text-amber-600">{option.price}</span>/mon</h2>
        <h2 className=" text-4xl font-bold ">{option.membership_name}</h2>
      </div>
      <div className="space-y-3 border border-orange-400 p-5 rounded-xl flex-grow">
        {
          features.map((opt, index) => <Features key={index} features={opt}></Features>)
        }
      </div>
      <button className=" hover:bg-purple-500 hover:text-white font-bold w-full text-xl bg-green-500 text-black rounded-2xl py-3 my-5"> Buy Now</button>
    </div>
  );
};

export default Option;