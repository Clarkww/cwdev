import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



import './style.css'


import Header from './comps/Header'

import Footer from './comps/Footer'


import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

import Home from './pages/Home'


import crackTheCode from './img/crack-the-code.png'
import mindMatters from './img/mind-matters.png'
import gooodStore from './img/good-store.png'
import justEat from './img/get-data-from-any-website.png'
import mageInv from './img/mage-inv.png'
import shapeAttack from './img/shape-attack.png'

function App() {

  let projects = [
    {
      name: 'Shape Attack',
      description: 'A browser based game built with HTML, CSS and JS',
      link: 'https://clarkww.github.io/shape-game/',
      repo: '',
      img: shapeAttack
    },
    {
      name: 'Mind Matters',
      description: 'A mental health app built with HTML, CSS, JS and Firebase',
      link: 'https://testz-a521c.web.app/',
      repo: '',
      img: mindMatters
    },
    {
      name: 'Crack The Code',
      description: 'A project made for a client using Vanilla JS and HTML Cnavas',
      link: 'https://clarkww.github.io/guess-the-code/',
      repo: '',
      img: crackTheCode
    },
    {
      name: 'Goood Store',
      description: 'An E commerece store built using Shopify api, ReactJS and hosted with Firebase',
      link: 'https://goodstore-fb6ab.web.app/',
      repo: '',
      img: gooodStore
    },
    {
      name: 'Mage Invaders',
      description: 'A personal project, its a browser based game built with HTML canvas and JS',
      link: 'https://clarkww.github.io/mage-invaders/',
      img: mageInv
    },
    {
      name: 'Just-Eat Menu Scraper',
      description: 'A personal project, a web scraper built with node.js and puppeteer',
      link: 'https://github.com/Clarkww/flappy-bird',
      repo: '',
      img: justEat


    }

  ]

  return (
    <>
      <Router>
      <Header />
          <Routes>
            <Route  path='/' element={<Home projects={projects} />} />
            <Route path='/contact' element={<Contact /> } />
            <Route path='/projects' element={<Projects projects={projects} />} />
            <Route path='/about' element={<About />} />
            
          </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default App
