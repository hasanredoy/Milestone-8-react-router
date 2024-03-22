import { useContext } from "react";
import { moneyContext } from "../../grandpa/Grandpa";


const Brother = () => {
  const [money, setMoney] = useContext(moneyContext)
  return (
    <div className='border border-gray-500 rounded-lg p-5'>
      <h1>brother</h1>
      <p>money {money}</p>
    </div>
  );
};

export default Brother;