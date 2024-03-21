import { NavLink, useLoaderData } from "react-router-dom";

const Meal = () => {
  const meal = useLoaderData()
  console.log(meal);
  return (
    <div className="my-5">
      {
        meal.meals.map(meal =><div key={meal.idMeal
        } className="card w-[70%] mx-auto bg-gray-300 shadow-xl">
        <figure className=" bg-gray-300"><img className=" w-[50%] rounded-lg bg-gray-300  " src={meal.strMealThumb} alt="Foods" /></figure>
        <div className="card-body">
          <h2 className="text-3xl font-bold text-red-400">{meal.strMeal}</h2>
          <h2 className="text-xl font-bold">Ingredients:</h2>
          <ul className=" list-disc ml-10 grid grid-cols-2 my-5 font-semibold">
            <li>{meal.strIngredient1} {meal.strMeasure1}</li>
            <li>{meal.strIngredient2} {meal.strMeasure2} </li>
            <li>{meal.strIngredient3} {meal.strMeasure3}</li>
            <li>{meal.strIngredient4} {meal.strMeasure4}</li>
            <li>{meal.strIngredient5} {meal.strMeasure5}</li>
            <li>{meal.strIngredient6} {meal.strMeasure6}</li>
            <li>{meal.strIngredient7} {meal.strMeasure7}</li>
            <li>{meal.strIngredient8} {meal.strMeasure8}</li>
            <li>{meal.strIngredient9} {meal.strMeasure9}</li>
            <li className={meal.strIngredient10?'list-disc':'list-none'}>{meal.strIngredient10?meal.strIngredient10:''} {meal.strMeasure10?meal.strMeasure10 :''}</li>
            <li className={meal.strIngredient11?'list-disc':'list-none'}>{meal.strIngredient10?meal.strIngredient11:''} {meal.strMeasure11?meal.strMeasure11:''}</li>
          </ul>
          <p className="text-lg font-bold">{meal.strInstructions}</p>
          <div className="card-actions justify-center">
            {
              <NavLink to="/meals"><button className="btn btn-accent">Go Back</button></NavLink>
            }
          </div>
        </div>
      </div>) 
      }
    </div>
  );
};

export default Meal;