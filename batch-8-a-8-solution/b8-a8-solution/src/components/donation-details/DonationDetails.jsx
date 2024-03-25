import { useParams } from "react-router-dom";
import CustomHook from "../CustomHook/CustomHook";
import { useEffect } from "react";
import { useState } from "react";
// import Card from "../Card/Card";
import {  setInStorage } from "../localStorage/LocalStorage";

const DonationDetails = () => {
  const [ singleD , setSingleD ] = useState({})
  const { id } = useParams()
  const { data, loading } = CustomHook()
  
  // const parsID = parseInt(id)
  const {title , image ,description,price }=  singleD ||{}
  
  useEffect(() => {
    if(data){
      const newData = data.find(d => d.id === +id)
    setSingleD (newData)
    }
  }, [data,id])
  const handelDonation =(id)=>{
    // console.log(id);
    setInStorage(id)
    const idStr = JSON.stringify(id)
    // saveToLS(id)
    // localStorage.setItem('donation',idStr)
  }
  console.log(title );
  return (
      <div className="card container  mx-auto bg-base-100 shadow-xl">
        <figure className=" relative"><img className="w-full bg-cover image-full h-[500px]" 
        src={image}
         alt="Shoes" />
      <div className=" w-full bg-black opacity-90 absolute  bottom-0 "><button onClick={()=>handelDonation(singleD)} className="btn">Donate $ {price}</button></div>
         </figure>
            
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
  );
};

export default DonationDetails;