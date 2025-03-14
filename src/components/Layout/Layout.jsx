import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
    return (
        <div className=''>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;
