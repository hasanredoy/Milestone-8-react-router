import { useLoaderData} from "react-router-dom";
import "./posts.css"
import Post from "../singlePost/Post";
const Posts = () => {

  
  const posts = useLoaderData()

  
  return (
    <div>
      {/* <h1>post:{posts.length}</h1> */}
      <div className="posts">
        {
          posts.map(Sposts => <Post key={Sposts.id} post={Sposts}></Post>)
        }
      </div>
    </div>
  );
};

export default Posts;