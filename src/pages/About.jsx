import React, {useState} from 'react'

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPlus, FaMinus} from "react-icons/fa"

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
  )
}
