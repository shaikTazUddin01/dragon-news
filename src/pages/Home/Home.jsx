import React from 'react';
import Header from '../../Component/Shared/Header/Header';
import Navbar from '../../Component/Shared/Header/Navbar/Navbar';
import LeftSideNav from '../../Component/Shared/Sidebar/LeftSideNav/LeftSideNav';
import RightSideNav from '../../Component/Shared/Sidebar/RightSideNav/RightSideNav';
import BrakingNews from './BrakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../News/NewsCard';

const Home = () => {
    const news=useLoaderData()
    return (
        <div>
           <div className=''>
           <Header></Header>
           <BrakingNews></BrakingNews>
            <Navbar></Navbar>
           </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-10'>
                <div className=''>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='md:col-span-2'>
                 {
                    news.map(anews=><NewsCard key={anews._id} anews={anews}></NewsCard>)
                 }
                </div>
                <div className=''>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;