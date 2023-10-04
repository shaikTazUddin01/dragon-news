import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrakingNews = () => {
    return (
        <div className="flex bg-slate-100">
            <button className='btn btn-primary text-white'>Latest</button>
            <Marquee pauseOnHover='true'>
                <Link className="mr-8">I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mr-8">I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mr-8">I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default BrakingNews;