import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ anews }) => {
const {_id,title,image_url,details}=anews
    return (
        <div className='mb-10'>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    {
                        details.length>200? 
                            <p>{details.slice(0,200)} <Link className='text-blue-600 font-semibold' to={`/newsDetails/${_id}`}>See more...</Link></p>
                            :
                      <p>{details}</p>
                        
                    }
                    
                    
                </div>
            </div>
        </div>
    );
};

export default NewsCard;