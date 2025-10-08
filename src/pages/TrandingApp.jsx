import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PiDownloadSimple } from 'react-icons/pi';

const TrandingApp = ({apps}) => {
    const {title,image,ratingAvg,downloads} = apps;

    return (
        <div className='bg-[#ffffff] p-4 rounded-lg'>
            <div className='flex justify-center items-center'>
                <img src={image} className='rounded-lg' alt="" />
            </div>
            <div className='space-y-4'>
                <h3 className='mt-3 text-xl font-medium'>{title}</h3>
                <div className='flex justify-between items-center'>
                    <button className='btn'> <PiDownloadSimple className='text-[#00D390]' />{downloads}</button>
                    <button className='btn bg-[#FFF0E1]'><FaStar className='text-[#FF8811]' /> {ratingAvg}</button>

                </div>
            </div>
        </div>
    );
};

export default TrandingApp;