import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../utility/addToInstallDB';
import InstalledApp from './InstalledApp';

const Installation = () => {
    const [appList, setAppList] = useState([]);
    const data = useLoaderData();
    useEffect(() =>{
        const storedAppData = getStoredApp();
        const convertedApps = storedAppData.map(id => parseInt(id));
        const myAppList = data.filter(app => convertedApps.includes(app.id));
        setAppList(myAppList);
    },[])
    const handleAppRemove = (a) =>{
        console.log(a);
        const filterData = appList.filter(app => app.id !== a.id)
        setAppList(filterData);

    }
    return (
        <div className='max-w-7xl mx-auto my-[40px]'>
            <h3>Installation</h3>
            <div>
                {
                    appList.map(app => <InstalledApp handleAppRemove={handleAppRemove} key={app.id} app={app}/>)
                }
            </div>
        </div>
    );
};

export default Installation;