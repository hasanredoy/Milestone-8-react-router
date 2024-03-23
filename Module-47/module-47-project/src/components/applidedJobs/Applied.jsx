import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredAppliedJob } from "../utility/Localstorage";

const Applied = () => {
  const jobs = useLoaderData()
  const [getJob, setJob] = useState([])
  const [displayJob, setDisplayJob] = useState([])
  
  const handleJobFilter = filter =>{
    if(filter === 'all'){
      setDisplayJob(getJob)
    }else if(filter === 'remote'){
      const remoteJob = getJob.filter(job => job.remote_or_onsite === "Remote")
       setDisplayJob(remoteJob) 
       
    }
    else if(filter === 'onsite'){
      const remoteJob = getJob.filter(job => job.remote_or_onsite === "Onsite")
       setDisplayJob(remoteJob) 
       
    }
  }
  useEffect(() => {
    const storedData = getStoredAppliedJob()
    // const parsStoredId = parseInt(storedData)
    if (jobs.length > 0) {
      // const jobApplied = jobs.filter(job => storedData.includes(job.id)) //complex way 

      // easy way 
      const jobApplied = []
      for (const id of storedData) {
        const job = jobs.find(job => job.id === id)
        if (job) {
          jobApplied.push(job)
        }
      }
      setJob(jobApplied)
      setDisplayJob(jobApplied)
    }
  }, [])
  return (
    <div>
      <h1>applied jobs:{getJob.length} </h1>
      <details className="dropdown">
        <summary className="m-1 btn">Sort</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={()=> handleJobFilter('all')}><a>ALL</a></li>
          <li onClick={()=> handleJobFilter('remote')}><a>Remote</a></li>
          <li onClick={()=> handleJobFilter('onsite')}><a>OnSite</a></li>
        </ul>
      </details>
      <ul className=" my-20">
        {
          displayJob.map(job => <li key={job.id}>{job.job_title}: job category {job.remote_or_onsite}</li>)
        }
      </ul>
    </div>
  );
};

export default Applied;