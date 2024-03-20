import React from 'react'
import ReactDOM from 'react-dom/client'
import "./App.css"
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.jsx';
import Contact from './components/contact/Contact.jsx';
import About from './components/about/About.jsx';
import Users from './components/users/Users.jsx';
import UserDetails from './components/user-details/UserDetails.jsx';
import Posts from './components/posts/Posts.jsx';
import PostDetails from './components/post-details/PostDetails.jsx';
import ErrorPage from './components/error-Page/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/about",
        element: <About></About>
      },
      {
        path:"/contact",
        element: <Contact></Contact>
      },
      {
        path:"/users",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path:"/user/:userId",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>

      },
    {
      path:"/posts",
      loader:()=> fetch(`https://jsonplaceholder.typicode.com/posts`),
      element:<Posts></Posts>
    },
    {
      path:"/post/:postId",
      loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      element:<PostDetails></PostDetails>
    }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
