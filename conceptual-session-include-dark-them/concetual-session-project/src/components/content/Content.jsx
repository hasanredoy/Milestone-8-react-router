import { useOutletContext } from "react-router-dom";
import cover from "../../assets/404.jpg"
import Markdown from "react-markdown"
import rehypeRaw from "rehype-raw"
const Content = () => {
  const [blog] = useOutletContext()
  console.log(blog);
  return (
    <div to={`/blog/${blog.id}`}
      rel="noopener noreferrer" className=" mx-auto group border-primary border-2 border-opacity-40 focus:no-underline  bg-base-200 hidden sm:block p-1 overflow-auto">
      <img role="presentation" className="object-cover w-full rounded h-44 bg-base-300" src={blog.cover_image || cover} />
      <div className=" my-3 flex gap-4">
        {
          blog.tags.map((tag, index) => <a key={index} rel="noopener noreferrer" className="px-3 py-1 rounded-sm hover:underline bg-gray-300 ">#{tag}</a>
          )}
      </div>
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold ">{blog.title}</h3>
        
        <Markdown rehypePlugins={[rehypeRaw]}>{blog.body_html}</Markdown>
      </div>
     
    </div>
  );
};

export default Content;