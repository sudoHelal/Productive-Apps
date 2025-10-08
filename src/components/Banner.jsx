import React from 'react';
import bannerImg from '../assets/hero.png';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import { Link } from 'react-router';
const Banner = () => {
    return (
        <div className=' flex flex-col justify-center items-center space-y-10 mt-[40px] lg:mt-[80px]'>
            <div className='space-y-4'>
                <h2 className='lg:text-7xl text-3xl font-bold text-center'>We Build <br />
                    <span className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent font-extrabold'>Productive</span> Apps</h2>
                    <p className='text-[#627382] text-center'> we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    
                        <div className='flex gap-4 justify-center'>
                        <Link target='_blank' to='https://play.google.com/store/games?hl=en'>
                        <button className='px-6 py-4 rounded-lg border flex items-center border-[#d2d2d2] font-bold text-black'> <FaGooglePlay /> Google pay</button>
                        </Link>
                        <Link target='_blank' to="https://www.apple.com/app-store/">
                        <button className='px-6 py-4 rounded-lg border flex items-center border-[#d2d2d2] font-bold text-black'> <FaAppStoreIos /> App Store</button>
                        </Link>
                    </div>
                   
            </div>
            <div>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;