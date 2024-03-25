import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { deleteFromStorage, setInStorage } from "../LocalStorageFunctions/LocalStorage";
const BlogsDetails = () => {
  const blog = useLoaderData()
  const [tabIndex , setTabIndex] = useState(0)
 
  const handleBookmark =(id)=>{
    // console.log(id);
     setInStorage(id)
    // deleteFromStorage(id)
  }

  return (
    <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8">
        <div className="space-y-6">
          <a href={blog.url} target="blank" className="text-4xl font-bold md:tracking-tight hover:underline md:text-5xl">{blog.title}</a>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center ">
            <div className="flex items-center md:space-x-2">
              <img src={blog.user.profile_image} alt="" className="w-4 h-4 border rounded-full bg-gray-500 border-gray-700" />
              <p className="text-sm">Leroy Jenkins • {new Date(blog.published_at).toLocaleDateString()}</p>
            </div>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{blog.reading_time_minutes} min read • {blog.public_reactions_count} views</p>
          </div>
          {/* tabs */}
          <div>
            <div className="flex items-center justify-start -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap ">
              <Link 
              to={""}  
              onClick={()=>setTabIndex(0)}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  rounded-t-lg ${tabIndex=== 0 ?"border border-b-0":" border-b"} border-gray-400 `}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Content</span>
              </Link>
              <Link
              to={"author"}
              onClick={()=>setTabIndex(1)}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  rounded-t-lg ${tabIndex===1 ?"border border-b-0":" border-b "} border-gray-400 `}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <span>Author</span>
              </Link>
              {/* bookmarks  */}
              <button onClick={()=>handleBookmark(blog)} className=" ml-2 text-red-500 text-4xl"><MdBookmarkAdd></MdBookmarkAdd></button>
            </div>
          </div>
        </div>
        <Outlet context={[blog]}></Outlet>
      </article>
      <div>
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
          {
            blog.tags.map((tag,index) => <a key={index} rel="noopener noreferrer"  className="px-3 py-1 rounded-sm hover:underline bg-base-300 ">#{tag}</a>
      ) }
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Related posts</h4>
          <ul className="ml-4 space-y-1 list-disc">
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">Nunc id magna mollis</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">Duis molestie, neque eget pretium lobortis</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">Mauris nec urna volutpat, aliquam lectus sit amet</a>
            </li>
          </ul>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default BlogsDetails;