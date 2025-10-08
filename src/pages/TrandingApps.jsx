import React from 'react';
import TrandingApp from './TrandingApp';
import { Link } from 'react-router';

const TrandingApps = ({appsData}) => {
   
    return (
        <div className='max-w-7xl mx-auto pb-[80px]'>
            <div className='flex flex-col justify-center items-center pb-10 space-y-4'>
                <h2 className='lg:text-5xl text-2xl font-bold'>Trending Apps</h2>
            <p className='text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8'>
            {
                appsData.map(apps => <TrandingApp key={apps.id} apps={apps} />)
            }
        </div>
        <div className='flex justify-center items-center'>
            <Link to='/apps' className='py-4 px-10 rounded-lg btn mt-[40px]  bg-gradient-to-r  from-[#632ee3] to-[#9f62f2] text-white'>Show All</Link >
        </div>
        </div>
    );
};

export default TrandingApps;