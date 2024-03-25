import { useEffect, useState } from "react";
import { deleteFromStorage, getStorage } from "../LocalStorageFunctions/LocalStorage";
import SingleBlog from "../blogs/SingleBlog";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const Bookmarks = () => {
  let [blogs, setBlogs] = useState([])
  useEffect(() => {

    let storage = getStorage()
    console.log(storage);
    setBlogs(...blogs, storage)

  }, [])

  const handleRemove = (id) => {
    // toast('remove successful')
    deleteFromStorage(id)
    let storage = getStorage()
    console.log(storage);
    setBlogs(storage)
  }
  return (
    <div className="  grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3  px-8 ">
      {
        blogs.map(blog => <SingleBlog handleRemove={handleRemove} deleteble={true} key={blog.title} blog={blog}></SingleBlog>)
      }   <div className=' relative'>

      </div>
      {
        blogs.length=== 0 && <div className="flex flex-col justify-center items-center min-h-[calc(100vh-116px)] gap-y-4">
          <h1 className=" font-black text-center text-4xl">No Bookmarks Added</h1>
          <Link to={"/blogs"}><button className="btn btn-accent hover:bg-slate-400 text-xl">Read Blogs</button> </Link>
        </div>
      }
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Bookmarks;