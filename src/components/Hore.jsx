import React from 'react';

const Hore = () => {
    return (
        <div className='h-[410px] bg-gradient-to-r lg:mb-[80px] mb-[40px] from-[#632ee3] to-[#9f62f2]'>
            <div className='lg:py-20 py-15 flex flex-col justify-center items-center'>
            <h3 className='text-white text-2xl lg:text-5xl font-bold'>Trusted by Millions, Built for You</h3>
            <div className='grid grid-cols-3 lg:gap-[200px] lg:mt-10 mt-10'>
                <div className='text-center space-y-2 lg:space-y-4'>
                    <p className='text-base font-normal text-white'>Total Downloads</p>
                    <h2 className='lg:text-6xl text-3xl font-extrabold text-white'>29.6M</h2>
                    <p className='text-base font-normal text-white'>21% more than last month</p>
                </div>
                <div className='text-center space-y-2 lg:space-y-4'>
                    <p className='text-base font-normal text-white'>Total Reviews</p>
                    <h2 className='lg:text-6xl text-3xl font-extrabold text-white'>906K</h2>
                    <p className='text-base font-normal text-white'>46% more than last month</p>
                </div>
                <div className='text-center space-y-2 lg:space-y-4'>
                    <p className='text-base font-normal text-white'>Active Apps</p>
                    <h2 className='lg:text-6xl text-3xl font-extrabold text-white'>132+</h2>
                    <p className='text-base font-normal text-white'>31 more will Launch</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Hore;