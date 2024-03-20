import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const navigate = useNavigate()
  const handleGoBack = ()=>{
    navigate(-1)
  }
  const posts = useLoaderData()

  const params = useParams()
  console.log(params);
  return (
    <div>
      <h2>title: {posts.title}</h2>
      <h6>title: {posts.body}</h6>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;