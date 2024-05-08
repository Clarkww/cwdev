import React from 'react'

import crackTheCode from '../img/crack-the-code.png'
import mindMatters from '../img/mind-matters.png'
import gooodStore from '../img/good-store.png'
import justEat from '../img/get-data-from-any-website.png'
import mageInv from '../img/mage-inv.png'

export default function Projects() {

  let projects = [
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
      link: 'https://www.google.com',
      repo: '',
      img: justEat


    }

  ]
  return (
    <main className='projects-page'>
      <h1>Projects</h1>
      <p>Here are some of the projects I've worked on:</p>
      <div className="projects-container">
        {/* <div className="project">
          <img src={crackTheCode} className='project-img' alt="" />
          <div className="project-info">
            <h2>Crack The Code</h2>
            <p>A project made for a client using Vanilla JS and HTML Cnavas</p>
            <div className="links">
              <a href="">View</a>
              <br />
              <a href="">Repo</a>
            </div>
          </div>

          
        </div> */}

        {projects.map((project, index) => {
          return (
            <div className="project" key={index}>
              <img src={project.img} className='project-img' alt="" />
              <div className="project-info">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className="links">
                  <a href={project.link} target='_blank'>View</a>
                  <br />
                  <a href={project.repo} target='_blank'>Repo</a>
                </div>
              </div>
            </div>
          )
        }
        )}



      </div>
    </main>
  )
}
