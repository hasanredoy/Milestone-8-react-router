import { useLoaderData, useNavigate } from "react-router-dom";

const Meals = () => {
  const meals = useLoaderData()
  const navigate = useNavigate()
  const handleMeal = (id)=>{
    navigate(`/meal/${id}`)
  }
  console.log(meals);
  return (
    <div>
        <div className=" grid grid-cols-2 w-[80%] mx-auto gap-5">
        {
          meals.meals.map(meal => <div key={meal.idMeal
          } className="card  bg-base-100 shadow-xl">
          <figure className="bg-black"><img className=" rounded-lg bg-black  opacity-60" src={meal.strMealThumb} alt="Foods" /></figure>
          <div className="card-body">
            <h2 className="card-title">{meal.strMeal}</h2>
            <p>{meal.strInstructions.slice(0,200)}......</p>
            <div className="card-actions justify-center">
              <button onClick={()=>handleMeal(meal.idMeal)} className="btn btn-accent">Show Details</button>
            </div>
          </div>
        </div>) 
        }
        </div>
    </div>
  );
};

export default Meals;