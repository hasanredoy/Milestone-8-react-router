import { useEffect } from "react";
import { useState } from "react";

const CustomHook = () => {
   const [data , setData] =useState([])

   const [loading , setLoading]=useState(false)

   useEffect(()=>{
    const fethData = async ()=>{
      setLoading(true)
      const res = await fetch('../../../public/data.json')
      const data = await res.json()
      setData(data);
      setLoading(false)
    }
    fethData()
   },[])
   
  return{data,loading}
};

export default CustomHook;