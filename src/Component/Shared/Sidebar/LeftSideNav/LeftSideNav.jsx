import { key } from 'localforage';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [Caterogys, setCategorys] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])

    return (
        <div className='font-poppins p-3'>
            <h2 className='text-3xl font-bold'>All Caterogy</h2>
            <h1 className='text-center
             bg-slate-100 text-2xl 
             font-semibold p-3 my-4 rounded-md'
             >National News</h1>
             <div className='space-y-5'>
             {
                Caterogys.map(Caterogy=>
                    <Link className='block text-xl font-medium text-slate-500' key={Caterogy.id}>{Caterogy.name}</Link>
                    )
             }
             </div>
        </div>
    );
};

export default LeftSideNav;