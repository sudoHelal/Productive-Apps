import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import App from './App';

const Apps = () => {
    const apps = useLoaderData();
    const [search,setSearch] = useState('');
    const term = search.trim().toLocaleLowerCase();
    const searchedApps = term ? apps.filter(app => app.title.toLocaleLowerCase().includes(term)) : apps;
    
    return (
        <div className='max-w-7xl mx-auto mb-40'>
            <div className='flex flex-col justify-center items-center py-10 space-y-4'>
                <h2 className='lg:text-5xl text-2xl font-bold'>Trending Apps</h2>
            <p className='text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between items-center'>
                <h3>({searchedApps.length}) Apps Found</h3>
                    <input value={search} onChange={e => setSearch(e.target.value)} type="search" name="" className='py-4 border w-1/4 border-[#d2d2d2] rounded-lg' placeholder='Search' id="" />
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 mt-[50px] grid-cols-1 gap-8'>
                {
                   searchedApps.length > 0 ? ( searchedApps.map(app => <App key={app.id} app={app} />)): (<div className='flex justify-center items-center'><p className="text-gray-500">No App Found</p></div>)
                }
            </div>
        </div>
    );
};

export default Apps;