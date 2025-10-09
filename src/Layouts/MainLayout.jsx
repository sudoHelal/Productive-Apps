import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    const navigation = useNavigation();
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            {
                navigation.state === 'loading' ? <Spinner /> :<Outlet />
            }
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default MainLayout;