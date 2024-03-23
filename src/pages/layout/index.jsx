import React from 'react'

import Topmenu from '../../components/Topmenu'
import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer'

const Layout = () => {
  return (
    <div>
      <Topmenu />
      <Navbar />
      <Outlet />
      <Footer />

      
    </div>
  )
}

export default Layout
