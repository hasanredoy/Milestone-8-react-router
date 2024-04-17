import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/root/Root';
import Home from './components/home/Home';
import Applied from './components/applidedJobs/Applied';
import Jobs from './components/jobs/Jobs';
import Blogs from './components/Blogs/Blogs';
import Error from './components/ErrorPage/Error';
import JobDetails from './components/JobDetails/JobDetails';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
   errorElement:<Error></Error>, 
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/applied",
        element: <Applied></Applied>,
        loader:()=> fetch('/jobs.json')
      },
      {
        path:"/jobs",
        element: <Jobs></Jobs>
      },
      {
        path:"/blogs",
        element: <Blogs></Blogs>
      },
      {
        path:"/job/:Id" ,
        element:<JobDetails></JobDetails>,
        loader:()=> fetch('../jobs.json')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>

     <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
