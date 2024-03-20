import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
  const postStyle = {
    margin:"10px",
    padding:"20px",
    border: "2px solid green",
    borderRadius:"20px"
  }
  const navigate = useNavigate()
  // handling post details by button 
  const handleDetails = ()=>{
    navigate(`/post/${post.id}`)
  }
  return (

    <div style={postStyle}>
      <h4>Title : {post.title}</h4>
      <h4>Body : <small>{post.body}</small></h4>
      <Link to={`/post/${post.id}`}>See Details</Link> <br />
      <button onClick={handleDetails}>Show Details</button>
    </div>
  );
};

export default Post;