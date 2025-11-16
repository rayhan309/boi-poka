import React from 'react';
import Navber from './Navber';
import Footer from './Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
           <Navber />
           <Outlet />
           <Footer /> 
        </>
    );
};

export default MainLayout;