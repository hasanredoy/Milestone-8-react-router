import { useEffect, useState } from "react";
import SingleCategory from "../SIngleCategory/SingleCategory";

const Category = () => {
  const [category,setCategory]=useState([])
  const [job , setJobs] = useState([])
  useEffect(()=>{
    fetch('categories.json')
    .then(res => res.json())
    .then(data => setCategory(data))
  },[])
  return (
    <div className="my-10">
      <h1 className=' text-4xl font-bold text-center'>Job Category List</h1>
      <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className="flex gap-10 w-[84%] mx-auto my-10">
           {
            category.map(cat => <SingleCategory key={cat.id} category={cat}></SingleCategory>)
           }
      </div>
    </div>
  );
};

export default Category;