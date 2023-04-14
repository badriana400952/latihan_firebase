import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserHome from './page2/UserHome'
import UserAdd from './page2/UserAdd'
import UserEdit from './page2/UserEdit'
// import NavbarComp from './component/NavbarComp'
import User from './page2/User'
import NavbarC from './page2/NavbarC'
import Women from './page2/Women'
import Home from './page2/Home'
import Men from './page2/Men'
import Baby from './page2/Baby'


const Latihan = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavbarC />}>
          <Route path='/' element={<Home />}/>
          <Route path='user' element={<User />} />
          <Route path='women' element={<Women />} />
          <Route path='men' element={<Men />} />
          <Route path='baby' element={<Baby />} />
        </Route>

        <Route path='admin' element={<UserHome />} />
        <Route path='add' element={<UserAdd />} />
        <Route path='edit/:id' element={<UserEdit />} />
      </Routes>
    </BrowserRouter>

  )
}

export default Latihan