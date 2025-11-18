import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Services from "../Pages/Services";
import Home from "../Pages/Home/Home";
import Covareg from "../Pages/Covaregs/Covareg";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/AuthPages/Login/Login";
import Register from "../Pages/AuthPages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path:'/services',
        element:<Services/>
      },
      {
        path:'/coverage',
        element:<Covareg/>,
        loader: ()=>fetch('/serviceCenter.json').then(res=>res.json())
      }
    ],
  },
  {
    path: '/',
    element:<AuthLayout/>,
    children:[
        {
          path: 'login',
          element:<Login/>
        },
        {
          path: 'register',
          element:<Register/>
        }
    ]
  }
]);
