
import PropTypes from 'prop-types';
import Option from '../option/Option';

const Options = ({ options }) => {
  const priceOpt = [
    {
      "id": 1,
      "name": "FitnessFusion",
      "membership_name": "Gold Membership",
      "price": "$50",
      "features": [
        "Treadmill",
        "Dumbbells",
        "Elliptical machine",
        "Yoga classes",
        "Spin classes",
        "Zumba classes",
        "Locker rooms",
       
      ]
    },
    {
      "id": 2,
      "name": "IronWorks Gym",
      "membership_name": "Platinum Membership",
      "price": "$70",
      "features": [
        "Barbells",
        "Power racks",
        "Cable machines",
        "Weightlifting classes",
        "Crossfit classes",
        "Locker rooms",
        "Protein bar"
      ]
    },
    {
      "id": 3,
      "name": "CardioZone Fitness",
      "membership_name": "Silver Membership",
      "price": "$60",
      "features": [
        "Treadmill",
        "Stationary bike",
        "Rowing machine",
        "Cardio kickboxing classes",
        "Boot camp classes",
        "Locker rooms",
        "Juice bar"
      ]
    }
  ]

  return (
    <div className=' my-10'>
      <h2 className="text-5xl font-bold text-center text-orange-800 my-10">Best Price in The Town</h2>

     <div className=' grid grid-cols-3'>
     {
        priceOpt.map(opt => <Option key={opt.id} option={opt}></Option>)
      }
     </div>
    </div>
  );
};

Options.propTypes = {
  options: PropTypes.object
};

export default Options;