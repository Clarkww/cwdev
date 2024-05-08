import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



import './style.css'


import Header from './comps/Header'

import Footer from './comps/Footer'


import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

import Home from './pages/Home'

function App() {

  return (
    <>
    <Router>
    <Header />
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route path='contact' element={<Contact /> } />
          <Route path='/projects' element={<Projects />} />
        </Routes>
    <Footer />
    </Router>
    </>
  )
}

export default App
