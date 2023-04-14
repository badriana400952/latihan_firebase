import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './aplikasi/admin/Admin'
import TambahData from './aplikasi/admin/TambahData'
import User from './aplikasi/user/User'



const Aplikasi = () => {


  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Admin/>}/>
            <Route path='tambah' element={<TambahData/>}/>
            <Route path='user' element={<User />}/>
        </Routes>
    </BrowserRouter>

  )
}

export default Aplikasi