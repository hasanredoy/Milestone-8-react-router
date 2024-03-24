// import { Outlet } from "react-router-dom";
// import Nav from "../components/Nav/Nav";
import wave from "../assets/wave.svg"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="hero min-h-[calc(100vh-116px)] bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">Welcome To <span className="text-5xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">ByteBlaze</span> </h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <div>
          <Link to={"/blogs"}><button className="btn btn-accent hover:bg-slate-400 text-xl">Read Blogs</button> </Link>
          <Link to={"/bookmarks"}><button className="btn btn-accent hover:bg-slate-400 text-xl">Bookmarks</button></Link>
          </div> 
        </div>
      </div>
      <div className=" absolute bottom-[8.2%] w-full">
        <img src={wave} />
      </div>
    </div>
    
    </div>
  );
};

export default Home;