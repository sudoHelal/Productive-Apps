import React from 'react';
import errorPageImg from '../assets/error-404.png'
import { Link, useNavigate } from 'react-router';
const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='space-y-16'>
                <img src={errorPageImg} alt="" />
            <div>
                <h2 className='text-[#001931] text-center mt-4 lg:text-5xl text-2xl font-semibold '>Oops, page not found!</h2>
            <p className='text-xl text-center mt-4 text-[#627382]'>The page you are looking for is not available.</p>
            <div className='flex justify-center items-center'>
                <Link to='/' onClick={() => navigate(-1)} className='py-4 px-10  rounded-lg btn mt-[40px]  bg-gradient-to-r  from-[#632ee3] to-[#9f62f2] text-white'>Go Back</Link >
            </div>
            </div>
            </div>
        </div>
    );
};

export default ErrorPage;