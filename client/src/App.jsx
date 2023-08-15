import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavbarLayout } from './layout/NavbarLayout'
import { Home } from './components/homepage/Home'
import { CatDetails } from './components/details/CatDetails'
import { SearchedCats } from './components/details/SearchedCats'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavbarLayout />}>
            <Route index element={<Home />} />
            <Route path='cats/:id' element={<CatDetails />}/>
            <Route path='/cats/searched' element={<SearchedCats />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
