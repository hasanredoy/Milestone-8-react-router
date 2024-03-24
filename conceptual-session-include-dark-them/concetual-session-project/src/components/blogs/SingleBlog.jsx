
import { Link } from 'react-router-dom';
import  cover from "../../assets/404.jpg"
const SingleBlog = ({blog}) => {
  return (
     <Link to={`/blog/${blog.id}`}
        rel="noopener noreferrer"  className="max-w-sm mx-auto group transition border-opacity-40 border-2 border-primary hover:border-secondary hover:scale-105  hover:no-underline focus:no-underline  bg-base-300 hidden sm:block">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-base-300" src={blog.cover_image || cover} />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{blog.title}</h3>
              <span className="text-xs   ">{new Date(blog.published_at).toLocaleDateString()}</span>
              <p>{blog.description}</p>
            </div>
         
     </Link>
  );
};

export default SingleBlog;