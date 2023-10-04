import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const MainLayout = () => {
    const {user,loader}=useContext(AuthContext)
    return (
        <div className='max-w-6xl mx-auto'>
            {/* <h1>this is main layout</h1> */}
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;