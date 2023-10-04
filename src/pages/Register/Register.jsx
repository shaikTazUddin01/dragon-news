import { Link } from 'react-router-dom';
import Navbar from '../../Component/Shared/Header/Navbar/Navbar';
import { useContext } from 'react';
import AuthProvider, { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
       const {createUser}=useContext(AuthContext)
    //    console.log(user)


    const handleRegister = (e) => {
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = (form.get('email'))
        const password = (form.get('password'))
        console.log(email, password)

        createUser(email,password)
        .then(result=>{
            console.log(result)
            alert("success")
            e.target.reset()
        })
        .catch(err=>{
            console.log(err)
        })
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
                            <h1 className="text-5xl font-bold">Register now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body" onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"
                                        placeholder="name"
                                        className="input input-bordered"
                                        name='name' required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text"
                                        placeholder="photo url"
                                        className="input input-bordered"
                                        name='photo' required />
                                </div>
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
                                    {/* <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label> */}
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" type='submit'>Register</button>
                                </div>
                                <p className='text-center'>Have an account.? <Link to={'/login'}> <span className='text-red-600 font-bold hover:text-blue-600'>Login</span></Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;