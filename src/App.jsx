import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

import { Header, SideNavbar } from './components'
import { Dashboard, Market, Detail, Login } from './pages'
import './App.css'

function App() {
  const {isAuthenticated} = useAuth0();
  return (
   <div>
      <Header />
      {isAuthenticated && <SideNavbar />}
     <Routes>
        <Route exect path='/'element={isAuthenticated ? <Dashboard /> : <Login />} />
        <Route  path='/market' element={<Market />}/>
        <Route path='/detail/:coinId' element={<Detail />}/>
     </Routes>
   </div>
  )
}

export default App
