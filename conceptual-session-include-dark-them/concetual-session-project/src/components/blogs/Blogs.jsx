import { useLoaderData } from "react-router-dom";
import SingleBlog from "./SingleBlog";

const Blogs = () => {

  const blogs = useLoaderData()
  return (
    <section className="   ">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a  className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12  bg-base-300">
          <img src={blogs[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-base-300" />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[0].title}</h3>
            <span className="text-xs  ">{new Date(blogs[0].published_at).toLocaleDateString()}</span>
            <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
          </div>
        </a>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
       {
        blogs.map(blog => <SingleBlog key={blog.title} blog={blog}></SingleBlog>)
       }
        </div>
        <div className="flex justify-center">
          <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline  bg-base-300   ">Load more posts...</button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;