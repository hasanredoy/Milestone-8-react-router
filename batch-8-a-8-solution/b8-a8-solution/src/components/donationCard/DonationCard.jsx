import cover from "../../assets/404.jpg"
import { NavLink } from "react-router-dom";

const DonationCard = ({ d }) => {
  const { title, image, description, price , id } = d || {}
  return (

    <div className="card card-side bg-base-100 shadow-xl">
      <figure><img src={image || cover} alt="Movie" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <NavLink to={`/donation-details/${id}`}>
        <div className="card-actions justify-center">
          <button className="btn btn-secondary">view details</button>
        </div>
        </NavLink>
      </div>
    </div>

  );
};

export default DonationCard;