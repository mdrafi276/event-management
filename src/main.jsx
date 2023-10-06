import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Leyout from './Leyout/Leyout';
import Login from './Components/Header/Page/Login/Login';
import Home from './Components/Header/Home/Home';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Leyout></Leyout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },    
      {
        path:'/login',
        element:<Login></Login>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
