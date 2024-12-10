import React from 'react'
import './Services.css'
import Glasses from '../../assets/img/glasses.png'
import HeartEMOJI from '../../assets/img/heartemoji.png'
import Humble from '../../assets/img/humble.png'
import Resume from '../../assets/Yoon Me Me Resume.pdf'
import { motion } from "framer-motion"
import Card from './Card/Card'

const Services = () => {
  const transition = {duration : 2, type: 'spring'}
  return (
    <div className='services' id='Services'>
        <div className="s-left">
            <span>My Awesome</span>
            <span>Services</span>
            <span>I share a lot of knowledge related with IT fields, Telecom fields, Web Development
                <br/>
                fields and other related fields on my own YouTube Channel and I search my career <br/> with engineer position in trending industries.
            </span>
            <a href={Resume} target='_blank'>
              <button className='button s-button'>Download CV</button>
            </a>
            <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
        </div>
        <div className="cards">
          <motion.div
          initial={{left: '10rem', top: '0rem'}}
          whileInView={{left: '20rem'}}
          transition={transition}
          className="" style={{left: '20rem'}}>
            <Card 
            emoji={HeartEMOJI}
            heading={'IT Engineer'}
            detail={'ISP, IXP, Data Center'}
            ></Card>
          </motion.div>

          <motion.div
          initial={{left: '10rem', top: '10rem'}}
          whileInView={{left: '-1rem'}}
          transition={transition}
          className="" style={{left: '-1rem', top: '12rem'}}>
            <Card 
            emoji={Glasses}
            heading={'Telecom Engineer'}
            detail={'Spectrum Management, Band Planning, Spectrum Authorization'}
            ></Card>
          </motion.div>

          <motion.div
          initial={{left: '15rem', top: '20rem'}}
          whileInView={{left: '18rem'}}
          transition={transition}
          className="" style={{left: '18rem', top: '22rem'}}>
            <Card 
            emoji={Humble}
            heading={'Web Development'}
            detail={'HTML, CSS, JavaScript, React'}
            ></Card>
          </motion.div>

          <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Services