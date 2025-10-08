import React from 'react';
import Banner from '../components/Banner';
import Hore from '../components/Hore';
import TrandingApps from './TrandingApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const apps = useLoaderData();
    const appsData = apps.slice(0,8);
    
    return (
        <div>
            <Banner />
            <Hore />
            <TrandingApps appsData={appsData} />
        </div>
    );
};

export default Home;