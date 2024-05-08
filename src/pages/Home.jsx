import React, {useEffect, useRef} from 'react'

import globe from '../img/globe.png'

// import icons for html css js react, nodejs and firebase from react-icons

// import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodeDotJs, SiFirebase } from 'react-icons/si'

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa"

import { SiFirebase } from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io5"


export default function Home() {

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
          <h2>
            Professional
          </h2>
          <h2>
            Web Development
          </h2>
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

      <section>
        <div className='home-page-about'>
          <div className='about-text'>
            <h2>About Me</h2>
            <p>
            I am a full stack Web developer passionate about crafting meaningful digital experiences. Committed to continuous learning and creative problem-solving. Let's build the web together.
            </p>
            <br />
            <p>
            Transforming your designs into dynamic, operational websites is my expertise. Crafting visually appealing website designs is also within my skill set. I offer support in hosting your website and establishing a personalized domain.
            </p>
          </div>
          {/* <img src={globe} alt="" /> */}
        </div>
      </section>
    </main>
  )
}
