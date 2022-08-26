import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import EnterPrise from './EnterPrise'
import Homepage from './Homepage'
import Login from './Login'
import Signup from './Signup'
import VideoCreationPage from './VideoCreationPage'

const AllRoutes = () => {
  return (
    
    <Routes>
        <Route path='/' element={<Dashboard/>||<Homepage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/enterprise' element={<EnterPrise/>} />
        <Route path='/videocreation' element={<VideoCreationPage/>} />
        
    </Routes>
  )
}

export default AllRoutes