
const SingleCategory = ({ category }) => {
  console.log(category);
  return (
    <div className="card bg-base-200 border border-gray-400  ">
      <div className="card-body">
        <img src={category.logo} alt="" />
        <h2 className="card-title text-2xl">{category.category_name}</h2>
        <p>{category.availability}</p>
        <div className="card-actions justify-end">
         
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;