import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PiDownloadSimple } from 'react-icons/pi';
import { Link } from 'react-router';

const App = ({app}) => {
    const {id,title,image,ratingAvg,downloads} = app;
    return (
        <Link to={`/appDetails/${id}`}>
            <div className='bg-[#ffffff] lg:p-4 p-2 rounded-lg'>
            <div className='flex justify-center items-center'>
                <img src={image} className='rounded-lg' alt="" />
            </div>
            <div className='space-y-4'>
                <h3 className='lg:mt-3 text-xl font-medium'>{title}</h3>
                <div className='flex justify-between items-center'>
                    <button className='btn'> <PiDownloadSimple className='text-[#00D390]' />{downloads}</button>
                    <button className='btn bg-[#FFF0E1]'><FaStar className='text-[#FF8811]' /> {ratingAvg}</button>

                </div>
            </div>
        </div>
        </Link>
    );
};

export default App;