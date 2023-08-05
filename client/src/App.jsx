import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavbarLayout } from './layout/NavbarLayout'
import { Home } from './components/homepage/Home'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavbarLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
