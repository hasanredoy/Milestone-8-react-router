import { useContext } from "react";
import Cousin from "../cousin/Cousin";
import { moneyContext } from "../../grandpa/Grandpa";

const Aunty = () => {
  const [money, setMoney] = useContext(moneyContext)
  return (
    <div className='border border-gray-500 rounded-lg p-5'>
      <h1> aunty</h1>
      <div className="flex gap-2 my-2">
        <Cousin cousin={1}></Cousin>
        <Cousin cousin={2}></Cousin>
      </div>
      <p>Aunty has: {money} tk</p>
      <button className="bg-slate-300" onClick={()=> setMoney(money+1000)}>Add some money and return</button>
    </div>
  );
};

export default Aunty;