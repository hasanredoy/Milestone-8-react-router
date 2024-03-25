import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layouts from './layouts/Layouts.jsx';
import Home from './components/home/Home.jsx';
import Statics from './components/statics/Statics.jsx';
import Donation from './components/Donation/Donation.jsx';
import DonationDetails from './components/donation-details/DonationDetails.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layouts></Layouts>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/statics",
        element:<Statics></Statics>
      },
      {
        path:"/donation",
        element:<Donation></Donation>
      },
      {
        path:"/donation-details/:id",
        element:<DonationDetails></DonationDetails>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
