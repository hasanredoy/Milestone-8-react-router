import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate()
  // const banner = document.getElementById('banner')
  const handleOurMenu= ()=>{
    
        navigate(`/meals`)
  }
  return (
    <div >
      <div  className="space-y-5 my-10">
        <h1 className="text-center font-bold text-xl lg:text-5xl space-y-8 text-[#ff5e57] drop-shadow-lg">Hey Everyone Welcome 
         <br className=""/>
         To Our Virtual Hotel </h1>
        <p className="text-center max-w-96 mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum culpa soluta autem fuga, porro eius temporibus ea quod. Consequuntur, sunt minus fuga aperiam eligendi eum repudiandae laudantium enim quo corrupti.</p>
      </div>
      {/* banner section  */}
      <div id="banner" className="hero min-h-screen bg-cover rounded-xl" style={{ backgroundImage: 'url(https://i.postimg.cc/FHYCjBvJ/pexels-prince-photos-3054690.jpg)' }}>
        <div className="hero-overlay bg-opacity-80 bg-black rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" space-y-5">
          <h1 className="text-center font-bold text-xl lg:text-5xl space-y-8 text-[#d2dae2] drop-shadow-lg">Hey Everyone Welcome 
         <br className=""/>
         To Our Virtual Hotel </h1>
        <p className="text-center max-w-96 mx-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum culpa soluta autem fuga, porro eius temporibus ea quod. Consequuntur, sunt minus fuga aperiam eligendi eum repudiandae laudantium enim quo corrupti.</p>
            <button onClick={handleOurMenu} className="btn btn-accent">Chek Our Menu</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;