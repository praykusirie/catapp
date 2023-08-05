import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/navbar/Navbar'

export const NavbarLayout = () => {
  return (
    <>
    <section className='w-[1440px] h-[2070px] bg-white'>
        <Navbar />
        <Outlet />
    </section>
    </>
  )
}
