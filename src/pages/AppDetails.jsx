import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadIcon from '../assets/icon-downloads.png'
import ratingsIcon from '../assets/icon-ratings.png'
import reviewIcon from '../assets/icon-review.png'
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

import { addToStoredDB } from '../utility/addToInstallDB';


const AppDetails = () => {
    const { id } = useParams();
    const appId = parseInt(id);
    const data = useLoaderData();
    const [isClicked, setIsClicked] = useState(false);
    const eachApp = data.find(app => app.id === appId);
    const { title, image,ratings, downloads,description, ratingAvg, reviews, companyName } = eachApp;
    const hadleAddToInstall = (id) =>{
        addToStoredDB(id);
        setIsClicked(true);
    }
    console.log(id, data);
    return (
        <div className='max-w-7xl mx-auto  mt-[40px] lg:mt-[80px] '>
             
            <div className='flex lg:gap-10 border-b border-[#dadddf] py-10  gap-5'>
                <div>
                <img src={image} alt="" />
            </div>
            <div>
                <div className='pb-8 border-b border-[#dadddf]'>
                <h3 className='text-3xl font-bold'>{title}</h3>
                <h4 className='text-[#627382]'>Developed by: <span className='text-[#773fe9]'>{companyName}</span></h4>
            </div>
            <div className='grid grid-cols-3 mt-6 gap-6'>
                <div className='space-y-2'>
                    <img src={downloadIcon} alt="" />
                    <p className='text-[#001931]'>Downloads</p>
                    <h3 className='text-4xl text-[#001931] font-bold'>{downloads}</h3>
                </div>
                <div className='space-y-2'>
                    <img src={ratingsIcon} alt="" />
                    <p className='text-[#001931]'>Average Ratings</p>
                    <h3 className='text-4xl text-[#001931] font-bold'>{ratingAvg}</h3>
                </div>
                <div className='space-y-2'>
                    <img src={reviewIcon} alt="" />
                    <p className='text-[#001931]'> Total Reviews</p>
                    <h3 className='text-4xl text-[#001931] font-bold'>{reviews}</h3>
                </div>

            </div>
            <div className='flex justify-center items-center mt-[45px]'>
                <button disabled={isClicked} onClick={() => hadleAddToInstall(id)} className='py-5 px-4 bg-[#00d390] text-white rounded-lg'>{isClicked ? "Uninstall" : "Install Now (291 MB)"}</button>
            </div>
            </div>
            </div>
            <div className='mt-[40px]'>
                <BarChart width={500} height={500} data={ratings}>
                    <XAxis dataKey="name" ></XAxis>
                    <YAxis></YAxis>
                    <Bar dataKey='count' fill='#8884d8'></Bar>
                    <Tooltip />
                    <Legend />
                </BarChart>
            </div>
            <div className='mt-[40px]'>
                <h3 className='text-2xl text-[#001931] font-semibold'>Desciption</h3>
            <p>{description}</p>
            </div>

        </div>
    );
};

export default AppDetails;