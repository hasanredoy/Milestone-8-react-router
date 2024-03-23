import { CiLocationOn } from "react-icons/ci";
import { LuCircleDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";
const SingleJob = ({ jobs }) => {
  console.log(jobs);
  return (
      <div className="card  bg-gray-100 text-black border border-gray-400">
        <div className="card-body">
          <h2 className="card-title">{jobs.job_title}</h2>
          <p>{jobs.company_name}</p>
          <div  className=' my-5'>
            <h2 className=' mr-5 btn border border-sky-200 bg-sky-100'>{jobs.remote_or_onsite}</h2>
            <h2 className='btn border border-sky-200 bg-sky-100'>{jobs.job_type}</h2>
          </div>
          <div className="flex gap-5">
              <h2 className=" flex gap-2 text-lg "><CiLocationOn className="mt-1"></CiLocationOn> {jobs.location}</h2>
              <h2 className=" flex gap-2 text-lg "><LuCircleDollarSign className="mt-1"></LuCircleDollarSign> Salary: {jobs.salary}</h2>
          </div>
          <div className="card-actions justify-center">
            <Link to={`/job/${jobs.id}`}>
            <button className="btn bg-[#7E90FE] text-white font-bold">View Details</button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default SingleJob;