import React from 'react';
import useAuth from '../Firebase/Hooks/useAuth';
import Loading from '../Components/Loadder/Loading';
import { Navigate, useLocation, } from 'react-router';


const PrivetRoute = ({children}) => {
    const {user,loadding}=useAuth()
    const location=useLocation()
    console.log(location    )
   

    if(loadding){
        return <Loading/>   
    }

    if(!user){
       return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }

    return children
};

export default PrivetRoute;