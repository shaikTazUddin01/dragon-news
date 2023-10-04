import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Career from '../pages/Career/Career';
import Login from '../pages/Login/Login';
import Register from '../pages/register/Register';
import NewsDetails from '../pages/News/NewsDetails';
import PrivateRoute from './PrivateRoute';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch('/news.json')
            },
            {
                path:'/about',
                element:<About></About>
            },{
                path:'/career',
                element:<Career></Career>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/newsDetails/:id',
                element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
            }
        ]
    }
])

export default Router;