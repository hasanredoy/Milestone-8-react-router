/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";
import  cover from "../../assets/404.jpg"
// import { deleteFromStorage } from '../LocalStorageFunctions/LocalStorage';
const SingleBlog = ({blog , deleteble ,handleRemove}) => {
 
  return (
    <div className='mt-10 relative min-h-[calc(100vh-116px)]'>
     <Link 
     to={`/blog/${blog.id}`}
        rel="noopener noreferrer"  className="relative max-w-sm mx-auto group transition border-opacity-40 border-2 border-primary hover:border-secondary hover:scale-105  hover:no-underline focus:no-underline  bg-base-300 hidden sm:block h-full  ">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-base-300" src={blog.cover_image || cover} />
            <div className="p-6 space-y-2">
              <a href={blog.url} className="text-2xl font-semibold hover:underline group-focus:underline">{blog.title}</a>
              <span className="text-xs   ">{new Date(blog.published_at).toLocaleDateString()}</span>
              <p>{blog.description}</p>
            </div>
         
     </Link>
     
           {deleteble && <button onClick={()=>handleRemove(blog.id)} className='text-2xl bg-secondary w-10 h-10 rounded-full p-2 text-primary gro hover:scale-105 absolute z-50 -top-5 -right-2'><MdDeleteForever></MdDeleteForever>
           </button>}
        
     </div>
  );
};

export default SingleBlog;