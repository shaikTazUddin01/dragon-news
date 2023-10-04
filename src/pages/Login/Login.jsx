import React, { useContext } from 'react';
import Navbar from '../../Component/Shared/Header/Navbar/Navbar';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { Result } from 'postcss';

const Login = () => {

    const{login}=useContext(AuthContext)
    const location=useLocation()
    const navigate=useNavigate()
    console.log("state",location)
    
    const handleLogin = (e) => {
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = (form.get('email'))
        const password = (form.get('password'))
        console.log(email, password)

        login(email,password)

        .then((Result)=>{
            navigate(location?.state ? location.state : '/');
        })
        .catch(err=>console.log(err))
    }
    return (
        <div className='bg-slate-100'>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <div className="py-5">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body" onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                        name='email' required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                        name='password' required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" type='submit'>Login</button>
                                </div>
                                <p className='text-center'>Don't have an account.? <Link to={'/register'}> <span className='text-red-600 font-bold hover:text-blue-600'>Register</span></Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;