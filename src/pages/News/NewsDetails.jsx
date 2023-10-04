import { useLocation, useParams } from 'react-router-dom';
import Header from '../../Component/Shared/Header/Header'
import Navbar from '../../Component/Shared/Header/Navbar/Navbar'
import RightSideNav from '../../Component/Shared/Sidebar/RightSideNav/RightSideNav'
const NewsDetails = () => {
    const { id } = useParams()
    // const location=useLocation()
    // console.log(location.pathname)
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-4'>
                <div className='col-span-3'>
                    <h1></h1>
                    <h2>details:{id}</h2>
                </div>
                <div className='col-span-1'>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;