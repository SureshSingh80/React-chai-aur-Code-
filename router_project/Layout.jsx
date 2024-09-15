import React from 'react'
import Navbar from './src/components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './src/components/Footer'
import SocialLinks from './src/components/SocialLinks'

const Layout = () => {
  return (
    
    <>
        <Navbar></Navbar>
        <Outlet ></Outlet>
        <Footer></Footer>
        <SocialLinks></SocialLinks>
    </>
  )
}

export default Layout