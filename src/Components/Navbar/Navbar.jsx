import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import { HiBars3BottomRight } from "react-icons/hi2";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const OpenMenu = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div className='navbar' id='Navbar'>
        <div className="nav-left">
            <div className="nav-name" style={{color: '#7fb8f9'}}>Ms. Yoon Me Me</div>
            {/* <DarkMode></DarkMode> */}
            {/* <img src={Moon} className='toggle-icon'></img> */}
        </div>
        <div className="nav-right">
            <div className="nav-list">
                <ul style={{listStyleType: 'none'}}>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='active'>
                        <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true}>
                        <li>Services</li>
                    </Link>
                    <Link spy={true} to='Experiences' smooth={true}>
                        <li>Experiences</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true}>
                        <li>Portfolio</li>
                    </Link>
                    <Link spy={true} to='Testimonial' smooth={true}>
                        <li>Testimonials</li>
                    </Link>                 
                </ul>
            </div>
            <Link to='contact' spy={true} smooth={true}>
                <button className="button nav-button">
                        Contact Me
                </button>
            </Link>
            <div className="icon" onClick={OpenMenu}>
                <HiBars3BottomRight />
            </div>
        </div>
    </div>
  )
}

export default Navbar