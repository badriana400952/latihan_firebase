import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarComp from './component/NavbarComp'



const Latihan = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavbarComp />}>
          
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default Latihan