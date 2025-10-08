import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';

const InstalledApp = ({app,handleAppRemove}) => {
    const {image,downloads,title,reviews} = app;
    console.log(app)
    return (
        <div className='flex justify-between mt-4 py-8 px-4 bg-white rounded-xl items-center'>
            <div className='flex gap-4'>
                <img className='h-[80px] rounded-lg' src={image} alt="" />
                <div className='space-y-2'>
                    <h3>{title}</h3>
                    <div className='space-x-2'>
                        <button className='btn text-[#00D390]'><FaDownload />{downloads}</button>
                        <button className="btn text-[#FF8811]"><FaStar />{reviews}</button>

                    </div>
                </div>
            </div>
            <button onClick={() => handleAppRemove(app)} className="btn bg-[#00D390] text-white rounded-lg">Uninstall</button>
        </div>
    );
};

export default InstalledApp;