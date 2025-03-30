import React from 'react'

import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiUpwork, SiGmail } from 'react-icons/si';
import { FaXbox } from 'react-icons/fa';
import { FaSoundcloud } from 'react-icons/fa';


export default function Footer() {
  return (
    <div className='footer'>
        <div className="social-links">
            <a href="https://github.com/Clarkww">
                <FiGithub />    
            </a>
            <a href="https://www.linkedin.com/in/clark-wheeler-b7242b258/">
                <FiLinkedin />
            </a>
            {/* <a href="">
                <SiGmail />
            </a> */}
            <a href="">
                <SiUpwork />
            </a>
            <a href="https://soundcloud.com/psychopomp-2">
                <FaSoundcloud />
            </a>
            <a href="">
                <FaXbox />
            </a>

        </div>
    </div>
  )
}
