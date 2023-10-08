import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Leyout from './Leyout/Leyout';
import Login from './Components/Header/Page/Login/Login';
import Home from './Components/Header/Home/Home';
import Register from './Components/Header/Page/Register/Register';
import ServiceHero from './Components/ServiceHero/ServiceHero';
import { AuthProvider } from './Components/Provider/AuthProvider';
import InfoDetails from './Components/ExtraService/InfoDetails';
import ExtraService from './Components/ExtraService/ExtraService';
import ServiceDetails from './Components/Header/Page/Details/ServiceDetails';
import PrivateRoute from './Components/Provider/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Leyout></Leyout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/Data/Data.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/",
        element: <ServiceHero></ServiceHero>,
        loader: () => fetch("/Data/Data.json"),
      },
      {
        path: "/service/:id",
        element: <PrivateRoute><InfoDetails></InfoDetails></PrivateRoute>,
        loader: () => fetch("/Data/Data.json"),
      },
      {
        path: "/serviceData/:id",
        element: <PrivateRoute><ExtraService></ExtraService></PrivateRoute>,
        loader: () => fetch("/Data/Data.json"),
      },
      {
        path:'/allDetails',
        element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader: () => fetch("/Data/Data.json"),
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
