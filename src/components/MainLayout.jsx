import React from 'react';
import Navber from './Navber';
import Footer from './Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
           <Navber />
           <div className="min-h-[calc(100vh-285px)]">
           <Outlet />
            </div>
           <Footer /> 
        </>
    );
};

export default MainLayout;