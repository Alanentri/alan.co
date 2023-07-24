import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Header.css';

export const Layout = () => {
  return (
    <>

    
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout;