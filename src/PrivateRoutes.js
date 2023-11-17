import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    let key = localStorage.getItem('AuthID')
    return key ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoutes;