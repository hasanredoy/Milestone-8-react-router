import { useEffect, useState } from "react";
import SingleJob from "../singleJob/SingleJob";

const FeaturedJob = () => {
  const [job , setJobs] = useState([])
  const [lengtH , setLength] = useState(4)
  const [toggle , setToggle] = useState(true)
  console.log(toggle);
  useEffect(()=>{
    fetch('jobs.json')
    .then(res => res.json())
    .then(data => setJobs(data))
  },[])
  return (
    <div className=" my-10">
      <div>
        <h1 className=' text-4xl font-bold text-center'>Job Category List</h1>
        <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className=" grid grid-cols-2 w-[80%] mx-auto gap-10 my-10">
          {
            job.slice(0,lengtH).map(Job => <SingleJob key={Job.id} jobs={Job}></SingleJob>)
          }
      </div>
      <div className={lengtH=== job.length? "hidden":"flex justify-center"}>
       {
        toggle &&  <button onClick={function(){setLength(job.length);
          // setToggle(!toggle)
        }} className="btn btn-accent">Show All</button>
       }
      </div>
    </div>
  );
};

export default FeaturedJob;