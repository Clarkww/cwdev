import React from 'react'

import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiUpwork, SiGmail } from 'react-icons/si';
import { FaXbox } from 'react-icons/fa';


export default function Footer() {
  return (
    <div className='footer'>
        <div className="social-links">
            <a href="">
                <FiGithub />    
            </a>
            <a href="">
                <FiLinkedin />
            </a>
            <a href="">
                <SiGmail />
            </a>
            <a href="">
                <SiUpwork />
            </a>
            <a href="">
                <FaXbox />
            </a>

        </div>
    </div>
  )
}
