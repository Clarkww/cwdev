import React, {useState} from 'react'

import { Link } from 'react-router-dom'

// import hamburger from react icons

import { RxHamburgerMenu } from "react-icons/rx"


import logo from '../img/logo.png'




export default function Header() {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    let toggleMobileMenu = () => {
        // console.log('clicked')
        
        setShowMobileMenu(!showMobileMenu)
    }
    
    

    return ( 
        <header>
            <div className="header-inner">
                <Link to='/'><img src={logo} className='header-logo' alt="" /></Link>
                {/* <nav className='desktop-nav'>
                    <ul>
                        <li><Link to='/about'>About</Link></li>
                        <li ><Link to="/projects" >Projects</Link></li>
                        <li><Link to="/contact" >Contact</Link></li>
                    </ul>
                </nav> */}

                
                <div className="mobile-menu" onClick={toggleMobileMenu}>
                    {/* <RxHamburgerMenu onClick={toggleMobileMenu}/> */}
                    <div id="navIcon" className={`${showMobileMenu ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            {/* TODO: make animation smoother */}
                        <div className={`mobile-nav ${showMobileMenu ? 'show' : 'hide'}`}>
                            <ul>
                                <li><Link to='/about' onClick={toggleMobileMenu}>About</Link></li>
                                <li><Link to="/projects" onClick={toggleMobileMenu}>Projects</Link></li>
                                <li><Link to="/contact" onClick={toggleMobileMenu}>Contact</Link></li>
                            </ul>
                        </div>

        </header>
    );
}
