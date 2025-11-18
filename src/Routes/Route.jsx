import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Services from "../Pages/Services";
import Home from "../Pages/Home/Home";
import Covareg from "../Pages/Covaregs/Covareg";

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
]);
