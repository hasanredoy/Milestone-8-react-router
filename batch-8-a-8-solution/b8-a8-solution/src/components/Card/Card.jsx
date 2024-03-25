import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
import cover from "../../assets/404.jpg"
const Card = ({d}) => {
  return (
  <NavLink to={`/donation-details/${d.id}`}>
     <div className="rounded-md shadow-md  " style={{background:d.cardBg}}>
          <img src={d.image||cover} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md" style={{backgroundColor:d.categoryBg,color:d.textColor}} >{d.category}</button>
              <h2 className="text-2xl font-semibold tracking-wide">{d.title}</h2>
          
            </div>
          </div>
        </div>
  </NavLink>
  );
};

export default Card;