import { useEffect, useState } from "react";
import axios from "axios";
import { Audio } from 'react-loader-spinner';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';


const Phones = () => {

  const [phones, setPhones]=useState([])
  const [loading, setLoading]=useState(true)
  useEffect(()=>{
    // fetch(` https://openapi.programming-hero.com/api/phones?search=iphone`)
    // .then(res => res.json())
    // .then(data => setPhones(data.data))

    // using axios
     axios.get(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    //  .then(data => console.log(data))
     .then(data =>{
     const phoneData = data.data.data 
     const fakeData = phoneData.map(phone =>{
      const singleData ={
        name : phone.phone_name,
        price: parseInt(phone.slug.split('-')[1])
      }
      return singleData
    })
    setPhones(fakeData)
    setLoading(false)
  })
},[])
// console.log();
  console.log(typeof phones.price);
  return (
    <div>
      {
        <div>
          {loading&& <Audio></Audio>
          }
        </div>
      }
      <h2 className=" text-5xl"> from phones{phones.length}</h2>
      <BarChart width={600} height={500} data={phones}>
          <Bar dataKey="price" fill="#8884d8"  />
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
    </div>
  );
};

export default Phones;