import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Services from "../Pages/Services";
import Home from "../Pages/Home/Home";
import Covareg from "../Pages/Covaregs/Covareg";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/AuthPages/Login/Login";
import Register from "../Pages/AuthPages/Register/Register";
import PrivetRoute from "./PrivetRoute";
import Rider from "../Pages/Rider/Rider";
import SendParcel from "../Pages/SendParcel/SendParcel";
import Aboute from "../Pages/Aboute/Aboute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/rider",
        element: (
          <PrivetRoute>
            <Rider></Rider>
          </PrivetRoute>
        ),
      },
      {
        path: "/coverage",
        element: <Covareg />,
        loader: () => fetch("/serviceCenter.json").then((res) => res.json()),
      },
      {
        path: "/sendParsel",
        element: (
          <PrivetRoute>
            <SendParcel />
          </PrivetRoute>
        ),
         loader: () => fetch("/serviceCenter.json").then((res) => res.json()),
      },
      {
        path:'aboute',
        element:<Aboute/>,
        loader:()=> fetch("/serviceCenter.json").then(res=>res.json()),
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
