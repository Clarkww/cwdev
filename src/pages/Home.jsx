import React, {useEffect, useRef} from 'react'

import { motion } from 'framer-motion'

import { useInView } from 'react-intersection-observer'

import globe from '../img/globe.png'

// import icons for html css js react, nodejs and firebase from react-icons

// import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodeDotJs, SiFirebase } from 'react-icons/si'

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa"

import { SiFirebase } from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io5"

import '../styles/home.css'


export default function Home( {projects} ) {



  let iconSize = 45

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;


    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: Math.random() * 0.1 + 0.11,
    }));

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'rgba(255, 255, 255, 0.54)';
      for (const star of stars) {
        star.x -= star.speed;
        if (star.x < 0) {
          star.x = canvas.width;
        }
        context.fillRect(star.x, star.y, 2, 2);
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, []);


  return (
    <main>
      <section className='home-page-hero' style={{position: 'relative'}}>
        <canvas ref={canvasRef} style={{ position: 'absolute', zIndex: 1, width: '100%', height: '100%' }}/>
        <div className='hero-text'>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Professional
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 2 }}
            transition={{ duration: 5 }}
          >
            Web Development
          </motion.h2>
        </div>
        <div className="icons">
          <FaHtml5 size={iconSize} className='html-icon' />
          <FaCss3Alt size={iconSize} className='css-icon' />
          <IoLogoJavascript size={iconSize} className='js-icon' />
          <FaReact size={iconSize} className='react-icon'/>
          <FaNodeJs size={iconSize} className='node-icon'/>
          <SiFirebase size={iconSize} className='firebase-icon'/>

        </div>
        

      </section>

      <section className='latest-projects'>

        {/* <h2>lates</h2> */}

        {/* card to show project  */}

        <div className="projects-container">
          {projects.slice(0, 3).map((project, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <motion.div
              key={index}
              className="project-card"
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
            >
              <img src={project.img} alt={project.name} />
              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.link} target='_blank' rel='noopener noreferrer'>View</a>
              </div>
            </motion.div>
          );
        })}
        </div>

      </section>
    </main>
  )
}
