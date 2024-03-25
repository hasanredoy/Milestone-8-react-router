import Card from "../Card/Card";
import DonationCard from "../donationCard/DonationCard";
// import CustomHook from "../CustomHook/CustomHook";

const Donation = () => {
  const storage = JSON.parse(localStorage.getItem('donation'))
  // const {data}= CustomHook()
  // console.log(data);
  //  const mapInStorage=storage.map(id)
  return (
    <div className=" min-h-screen">
    <div className="grid grid-cols-2 gap-5 container mx-auto ">
      {
        storage.map(item => <DonationCard key={item.id} d={item}></DonationCard>)
      }
    </div>
    </div>
  );
};

export default Donation;