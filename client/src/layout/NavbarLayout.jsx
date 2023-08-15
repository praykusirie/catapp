import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/navbar/Navbar'
import { Footer } from '../components/footer/Footer'

export const NavbarLayout = () => {
  return (
    <>
    <section className='w-[1440px] h-screen bg-white relative'>
        <Navbar />
        <Outlet />
        <Footer />
    </section>
    </>
  )
}
