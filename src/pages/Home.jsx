import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import '../styles/home.css';

import { Helmet } from 'react-helmet';

export default function Home({ projects }) {
  let iconSize = 45;
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
  }, [])

  const [displayText, setDisplayText] = useState('')
  // const [glitchText, setGlitchText] = useState('')

  let lastestProjectsHeadingText = 'Latest Projects';

  // let [displayTextInputBarClassName, setDisplayTextInputBarClassName] = useState('hide-text-input-bar');

  let [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < lastestProjectsHeadingText.length ) {
        console.log(i);
        // console.log(lastestProjectsHeadingText[i -1]);
        setDisplayText((prev) => prev + lastestProjectsHeadingText[i - 1])


        i++;
      } else {
        clearInterval(timer);
      }
    }, 400)

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [lastestProjectsHeadingText]);

  useEffect(() => {
    let count = 0;
    const maxAmountofTimes = 21;
    const interval = setInterval(() => {
      if (count < maxAmountofTimes) {
        setIsCursorVisible(prev => !prev);
        count++;
      } else {
        clearInterval(interval);
      }
    }, 500);
    
    return () => clearInterval(interval);
  }, []);


  const iconVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
      },
    }),
  };

  return (
    <>
      <Helmet>
        <title>CWdev | Home</title>
        <meta name="description" content="Showcasing professional web development skills with expertise in HTML, CSS, JavaScript, React, Node.js, and Firebase. Explore my latest projects and learn more about my experience." />
        <meta name="keywords" content="web development, frontend developer, HTML, CSS, JavaScript, React, Node.js, Firebase, responsive design, portfolio, projects, professional developer" />
        <meta name="author" content="Clark Wheeler" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="CWdev | Home" />
        <meta property="og:description" content="Discover professional web development skills and featured projects by CWdev." />
        {/* <meta property="og:image" content="URL_TO_YOUR_SOCIAL_SHARE_IMAGE" /> */}
        <meta property="og:url" content="https://cw-dev-01.web.app/" />
        <meta property="og:type" content="website" />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta name="twitter:title" content="CWdev | Home" />
        <meta name="twitter:description" content="Explore my web development expertise and latest projects." />
        <meta name="twitter:image" content="URL_TO_YOUR_TWITTER_IMAGE" />
      </Helmet>
      <main>
        <section className='home-page-hero' style={{ position: 'relative', overflow: 'hidden' }}>
          <canvas ref={canvasRef} style={{ position: 'absolute', zIndex: 0, width: '100%', height: '100%' }} />
          <div className='hero-text' style={{ position: 'relative', zIndex: 2 }}>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              Professional
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 5 }}
            >
              Web Development
            </motion.h2>
          </div>
          <div className="icons" style={{ position: 'relative', zIndex: 2 }}>
            <motion.div custom={0} initial="hidden" animate="visible" variants={iconVariants}>
              <FaHtml5 size={iconSize} className='html-icon' />
            </motion.div>
            <motion.div custom={1} initial="hidden" animate="visible" variants={iconVariants}>
              <FaCss3Alt size={iconSize} className='css-icon' />
            </motion.div>
            <motion.div custom={2} initial="hidden" animate="visible" variants={iconVariants}>
              <IoLogoJavascript size={iconSize} className='js-icon' />
            </motion.div>
            <motion.div custom={3} initial="hidden" animate="visible" variants={iconVariants}>
              <FaReact size={iconSize} className='react-icon' />
            </motion.div>
            <motion.div custom={4} initial="hidden" animate="visible" variants={iconVariants}>
              <FaNodeJs size={iconSize} className='node-icon' />
            </motion.div>
            <motion.div custom={5} initial="hidden" animate="visible" variants={iconVariants}>
              <SiFirebase size={iconSize} className='firebase-icon' />
            </motion.div>
          </div>
        </section>




        <section className='latest-projects'>

          <h2 className='home-page-late-proj-text'>
            
            {displayText}<span className={`${isCursorVisible ? 'blinking-cursor' : 'hide-text-input-bar'}`}>|</span>

          </h2>


          <div className="projects-container">
          {projects.slice(0, 3).map((project, index) => {
            const { ref, inView, entry } = useInView({
              triggerOnce: false,
              threshold: 0.5, // Adjust the threshold to control when the animation starts
            });

            const isEven = index % 2 === 0;
            const initialX = isEven ? -100 : 100;

            return (
              <motion.div
                key={index}
                className="project-card"
                ref={ref}
                initial={{ opacity: 0, x: initialX }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: initialX }}
                exit={{ opacity: 0, x: initialX }}
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


        </section >


      </main>
    
    </>
  );
}