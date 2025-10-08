import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../utility/addToInstallDB';
import InstalledApp from './InstalledApp';

const Installation = () => {
    const [appList, setAppList] = useState([]);
    const [sort,setSort] = useState('');
    const data = useLoaderData();
    useEffect(() => {
        const storedAppData = getStoredApp();
        const convertedApps = storedAppData.map(id => parseInt(id));
        const myAppList = data.filter(app => convertedApps.includes(app.id));
        setAppList(myAppList);
    }, [])
    const handleAppRemove = (a) => {
        console.log(a);
        const filterData = appList.filter(app => app.id !== a.id)
        setAppList(filterData);

    }
    const handleSort = (type) => {
        setSort(type);
        if( type === "Ascending"){
           const sortedByAscending = [...appList].sort((a,b) => a.downloads - b.downloads);
            setAppList(sortedByAscending)
        }
        if(type === 'Descending'){
            const sortedByDescending = [...appList].sort((a,b) => b.downloads - a.downloads);
            setAppList(sortedByDescending);
        }
    }
    return (
        <div className='max-w-7xl mx-auto my-[40px]'>
            <div className='flex flex-col justify-center items-center py-10 space-y-4'>
                <h2 className='lg:text-5xl text-2xl font-bold'>Your Installed Apps</h2>
                <p className='text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between items-center'>
                <h3 className='text-2x font-semibold'>{appList.length} Apps Found</h3>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 border bg-transparent border-[#d2d2d2] rounded-lg">Sort by download: {sort ? sort : ''}</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort('Ascending')}>Ascending</a></li>
                        <li><a onClick={() => handleSort('Descending')}>Descending</a></li>
                    </ul>
                </div>

            </div>
            <div>
                {
                    appList.map(app => <InstalledApp handleAppRemove={handleAppRemove} key={app.id} app={app} />)
                }
            </div>
        </div>
    );
};

export default Installation;