import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/MainFile/Home.jsx';
import Meals from './components/RecipeFile/Meals.jsx';
import Contact from './components/contact/Contact.jsx';
import About from '../../../Module-45/react-router-project/src/components/about/About.jsx';
import Meal from './components/meal/Meal.jsx';
import Error from './components/error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/meals",
        loader:()=> fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`),
        element:<Meals></Meals>
      },
      {
        path:"/meal/:mealId",
        loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`),
        element:<Meal></Meal>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
    {
      path:"/about",
      element:<About></About>
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
