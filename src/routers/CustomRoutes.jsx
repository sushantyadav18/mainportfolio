//import React from 'react'
import Home from '../pages/Home'
import Gallery from '../pages/Gallery'
import Education from '../pages/Education'
import Project from '../pages/Project'
import Skills from '../pages/Skills'
import { Routes, Route} from 'react-router-dom'
import  Layouts from '../mainLayouts/Layouts'

const CustomRoutes = () => {
  return (
    <>
    <Routes>
        <Route element={<Layouts/>}>
        <Route path="/" element={<Home />}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/skills" element={<Skills/>}/>
    </Route>
    </Routes>
    </>
  )
}

export default CustomRoutes
