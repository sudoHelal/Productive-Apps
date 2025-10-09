import React from 'react';
import footerLogoImg from '../assets/logo.png'
import { FaFacebook, FaXTwitter } from 'react-icons/fa6';
import { AiOutlineInstagram } from 'react-icons/ai';
const Footer = () => {
    return (
        <footer className="bg-[#001931] mt-auto">
          <div className='max-w-7xl mx-auto py-[42px] flex justify-between items-center border-b border-[#122940] pb-3'>
              <div className='flex gap-1 items-center'>
                <img src={footerLogoImg} className='h-[40px]' alt="" />
                <h3 className='text-white font-bold'>HERO.IO</h3>
              </div>
              <div>
                <p className='text-white'>Social Links</p>
                <div className='text-white flex gap-4'>
                  <span><FaXTwitter /></span>
                  <span><AiOutlineInstagram /></span>
                  <span><FaFacebook /></span>
                </div>
              </div>
          </div>
              <p className='py-8 text-white text-center'>Copyright © 2025 - All right reserved</p>
 
</footer>
    );
};

export default Footer;