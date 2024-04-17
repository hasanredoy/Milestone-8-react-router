import CustomHook from "../CustomHook/CustomHook";
import { Helmet} from 'react-helmet-async';
import Card from "../Card/Card";
const Home = () => {
  const {data , loading }= CustomHook()
  console.log(data);
  return (
    <div>
     <Helmet>
      <title>Home</title>
     </Helmet>
      {/* banner  */}
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <label className="input input-bordered flex items-center gap-2 text-black">
              <input type="text" className=" text-black grow" placeholder="Search" />
              <span className="badge badge-info">Search</span>
            </label>
          </div>
        </div>
      </div>

      {/* fetch section  */}
      <div className=" grid grid-cols-4 container mx-auto gap-5 my-20 ">
        {
          data.map(d=> <Card key={d.id} d={d}></Card>)
        }
      </div>
    </div>
  );
};

export default Home;