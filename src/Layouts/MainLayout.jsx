import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';

const MainLayout = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar />
            {
                navigation.state === 'loading' ? <Spinner /> :<Outlet />
            }
            <Footer />
        </div>
    );
};

export default MainLayout;