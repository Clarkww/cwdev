import React, {useState} from 'react'

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPlus, FaMinus} from "react-icons/fa"

import { Helmet } from 'react-helmet'

// we need plus and minus symbols from react icons



import { SiFirebase } from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io5"

import mindMattersImg from '../img/mind-matters.png'

import crackTheCodeImg from '../img/crack-the-code.png'

const jobs = [
  {
    title: 'Global Quality Sourcing ltd — Warehouse operative/Assistant',
    date: 'July 2018 - Aug 2022',
    description: 'Picking and packing orders, Process order using royal mail click and drop. Creating product listings on Ebay/Amazon. Input data into spreadsheets',
    bulletPoints: [
      'Picking and packing orders',
      'Process order using royal mail click and drop',
      'Creating product listings on Ebay/Amazon',
      'Input data into spreadsheets'
    ],
  },
  {
    title: 'Max 99p— Sales Assistant',
    date: 'Dec 2016 - May 2018',
    description: 'Experienced in various retail tasks, including shelf stacking, operating EPOS systems, and maintaining cleanliness. Customer service',
    bulletPoints: [
      'Shelf stacking',
      'Operating EPOS systems',
      'Maintaining cleanliness',
      'Customer service'
    ],
  }
  // Add more jobs as needed
];

export default function About() {

  let [otherJobsOpen, setOtherJobsOpen] = useState(false)

  let [mindMattersOpen, setMindMattersOpen] = useState(false)
  let [crackTheCodeOpen, setCrackTheCodeOpen] = useState(false)


  return (

    <>
    <Helmet>
      <title>About Me | CWdev</title>
      <meta 
        name="description" 
        content="Learn about my journey as a web developer, my skills in HTML, CSS, JavaScript, React, and Firebase, and my experience in front-end and mobile app development." 
      />
      <meta 
        name="keywords" 
        content="about CWdev, web developer, frontend developer, React, JavaScript, Firebase, web development portfolio, mobile app development, HTML, CSS, Node.js" 
      />
      <meta name="author" content="Clark Wheelerv" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />


      <meta property="og:title" content="About Me | CWdev" />
      <meta 
        property="og:description" 
        content="Discover my journey into web development, my expertise in front-end technologies like React, and my passion for creating impactful projects." 
      />
      <meta property="og:image" content="URL_TO_YOUR_SOCIAL_SHARE_IMAGE" />
      <meta property="og:url" content="https://cw-dev-01.web.app/about" />
      <meta property="og:type" content="website" />


      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Me | CWdev" />
      <meta 
        name="twitter:description" 
        content="CWdev | Web Development" 
      />
      <meta name="twitter:image" content="URL_TO_YOUR_TWITTER_IMAGE" />
    </Helmet>


    <section className='home-page-about'>
       
      <div className='about-text'>
        <h2>About Me</h2>
        <p>
          For the past two years, I've dedicated myself to learning the ins and outs of web development. From mastering the fundamentals of JavaScript, APIs, and databases to delving into advanced front-end technologies like React, my journey has been focused on honing my skills.

        </p>
        <p>
        I've developed a strong interest in front-end development, where I've specialized in utilizing frameworks like React to create compelling user interfaces. Recently, I've also begun delving into mobile app development through React Native. I'm eager to apply my growing expertise to collaborative projects that make a real difference
        </p>
      </div>

      <div className="skills-section">
        <h2>Skills</h2>
        <div className="skills">
          <div className="skill">
            <FaHtml5 size={50} className='html-icon' />
            <p>HTML</p>
          </div>
          <div className="skill">
            <FaCss3Alt size={50} className='css-icon'/>
            <p>CSS</p>
          </div>
          <div className="skill">
            <IoLogoJavascript size={50} className='js-icon' />
            <p>JavaScript</p>
          </div>
          <div className="skill">
            <FaReact size={50} className='react-icon' />
            <p>React</p>
          </div>
          <div className="skill">
            <FaNodeJs size={50} className='node-icon' />
            <p>Node.js</p>
          </div>
          <div className="skill">
            <SiFirebase size={50} className='firebase-icon' />
            <p>Firebase</p>
          </div>
        </div>
      </div>


      
    
    </section>
    
    </>
  )
}
