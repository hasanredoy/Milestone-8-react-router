import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storeApplyJob } from "../utility/Localstorage";
import { Helmet } from "react-helmet-async";
// import { Toast } from "react-toastify/dist/components";
const JobDetails = () => {
  const jobs = useLoaderData()
  const {Id}= useParams()
  const idInt = parseInt(Id)
  const job = jobs.find(jobsId => jobsId.id === idInt)
  console.log(job);


  const handlesApply = ()=>{
    storeApplyJob(idInt)
   toast('You have Applied successfully')
  }
  return (
    <div className="max-w-screen-md mx-auto">
       <Helmet>
        <title>career hub | details of {Id}</title>
       </Helmet>

      <h1>job detail </h1>
      <h1> i will do later</h1>
      <button onClick={()=> handlesApply()} className=" btn btn-secondary">
        Apply Job 
      </button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default JobDetails;