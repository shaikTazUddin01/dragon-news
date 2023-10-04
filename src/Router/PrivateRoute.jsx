import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location=useLocation()
    // console.log(location.pathname)

    if (loader) {
        return <p className='h-[100vh] flex justify-center items-center'>
            <span className="loading loading-spinner text-success loading-lg">
            </span></p>
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;