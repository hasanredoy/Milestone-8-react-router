import { CgCheckO } from "react-icons/cg";
const Features = ({features}) => {
  return (
    <div className="">
      
      <h2 className="text-xl flex gap-3"> <CgCheckO className="text-white bg-green-500 rounded-full text-2xl"/>{features}</h2>
    </div>
  );
};

export default Features;