import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import EnterPrise from './EnterPrise'

import Homepage from './Homepage'
import Login from './Login'
import Signup from './Signup'
import Template from './Template'
import VideoCreationPage from './VideoCreationPage'
import VideoViewerPage from './VideoViewerPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/enterprise' element={<EnterPrise/>} />
        <Route path='/videocreation' element={<VideoCreationPage/>} />
<<<<<<< HEAD
        <Route path="/dashboard" element={<Dashboard/>} /> 
=======

        <Route path='/videoviewer'element={<VideoViewerPage/>}/>

        

>>>>>>> 470b3e9ac1f457ee0ea2184eadf9ce5ff7a0d511
    </Routes>
  )
}

export default AllRoutes