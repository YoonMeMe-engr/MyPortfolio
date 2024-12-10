import React from 'react'
import './Works.css'
import YouTube from '../../assets/img/YouTube.png'
import Facebook from '../../assets/img/Facebook.png'
import GitHub from '../../assets/img/GitHub.png'
import LinkedIn from '../../assets/img/LinkedIn.png'
import Amazon from '../../assets/img/amazon.png'
import { motion } from "framer-motion"
import { Link } from 'react-scroll'

const Works = () => {
  return (
    <div className='works'>
        <div className="w-left">
            <span>Works for All these</span>
            <span>Brands & Clients</span>
            <span>
                <i class="fa-regular fa-circle-check" style={{marginRight: '1rem', color: 'var(--orange)', marginBottom: '1rem'}}></i>
                Provided detail information in Daily Traffic Analysis & Network Performance
                <br/>
                <i class="fa-regular fa-circle-check" style={{marginRight: '1rem', color: 'var(--orange)', marginBottom: '1rem'}}></i>                Analyzed, troubleshot and enhanced network performance to drive efficiency
                <br/>
                <i class="fa-regular fa-circle-check" style={{marginRight: '1rem', color: 'var(--orange)', marginBottom: '1rem'}}></i>                support the decision makers for issuing radio frequency authorization
                <br/>
                <i class="fa-regular fa-circle-check" style={{marginRight: '1rem', color: 'var(--orange)', marginBottom: '1rem'}}></i>
                band planning in-line with the Radio Regulation (RR), International Telecommunications Union (ITU)
                <br/>
                <i class="fa-regular fa-circle-check" style={{marginRight: '1rem', color: 'var(--orange)', marginBottom: '1rem'}}></i>
                creating the design and layout of a website or web pages
                <br/>
                <i class="fa-regular fa-circle-check" style={{marginRight: '1rem', color: 'var(--orange)', marginBottom: '1rem'}}></i>
                keeping up to date with design trends and technological, software and accessibility developments
                <br/>
                <i class="fa-regular fa-circle-check" style={{marginRight: '1rem', color: 'var(--orange)', marginBottom: '1rem'}}></i>
                Develop UI mockups and prototypes that showcase site functionality and appearance
                <br/>
                <i class="fa-regular fa-circle-check" style={{marginRight: '1rem', color: 'var(--orange)', marginBottom: '1rem'}}></i>
                Optimize applications for maximum speed and scalability
            </span>
            <Link to='contact' smooth={true} spy={true}>
              <button className='button s-button'>Hire Me</button>
            </Link>
            <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
        </div>
        <div className="w-right">
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
          <motion.div
          initial={{rotate: 45}}
          whileInView={{rotate: 0}}
          viewport={{margin: '-40px'}}
          transition={{duration: 3.5, type: 'spring'}}
          className="w-mainCircle">
            <div className="w-secCircle">
              <img src={YouTube} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Facebook} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Amazon} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={GitHub} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={LinkedIn} alt="" />
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Works