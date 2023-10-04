import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import defaultUserLogo from '../../../../assets/images/user.png'
import { AuthContext } from '../../../../Provider/AuthProvider';


// const jsdal=useState()
const Navbar = () => {
    const { user,loader } = useContext(AuthContext)
    // console.log(user)
    const { logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
        .then(()=>{
            console.log("sign out success")
        }).catch(err=>console.log(err))
    }
    if (loader) {
        return <p className=' flex justify-center items-center'>
        <span className="loading loading-spinner text-success loading-lg">
        </span></p>
    }
    const navLink =
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/career'}>Career</NavLink></li>
        </>
    return (
        <div class="navbar bg-base-100 mt-5" >
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="text-lg menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}

                    </ul>
                </div>

            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1 text-lg">
                    {navLink}

                </ul>
            </div>
            <div class="navbar-end gap-3">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={defaultUserLogo} />
                    </div>
                </label>

                {
                    user ?
                        <button className='btn btn-primary' onClick={handleLogOut} >LogOut</button>
                        :
                        <Link to={'/login'}>
                            <button className='btn btn-info'>Login</button>
                        </Link>


                }


            </div>
        </div>
    );
};

export default Navbar;