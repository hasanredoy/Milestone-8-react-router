
import Dad from '../components/dad/Dad';
import Uncle from '../components/uncle/Uncle';
import Aunty from '../components/aunty/Aunty';
import { createContext, useState } from 'react';

// creating context api 
export const contextProperty = createContext('property')

export const moneyContext = createContext(1000)
const Grandpa = () => {
  const [money , setMoney] = useState(1000)
  return (
    <div className='border border-gray-500 rounded-lg p-5'>
      <h1>Grandpa</h1>
      <p>Money {money}</p>
      <moneyContext.Provider value={[money,setMoney]}>
        <contextProperty.Provider value='property'>
          <div className='flex gap-3 my-4'>
            <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </div>
        </contextProperty.Provider>
      </moneyContext.Provider>
    </div>
  );
};

export default Grandpa;