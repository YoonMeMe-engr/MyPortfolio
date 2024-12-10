import React from 'react'
import './Intro.css'
import Vector1 from '../../assets/img/Vector1.png'
import Vector2 from '../../assets/img/Vector3.png'
import YMMPhoto from '../../assets/img/YMMPhoto.png'
import ThumbUp from '../../assets/img/thumbUp.png'
import Crown from '../../assets/img/crown.png'
import Happy from '../../assets/img/Happy.png'
import GlassesEMOJI from '../../assets/img/glassesEMOJI.png'
import { motion } from "framer-motion"
import FloatingDiv from './FloatingDiv/FloatingDiv'

const Intro = () => {
    const transition = {duration : 2, type: 'spring'}
  return (
    <div className='intro'>
        <div className="intro-left">
            <div className="intro-name">
                <span>I am</span>
                <span>Ms. Yoon Me Me</span>
                <span>Engineer with high level of experiences in IT, Telecom and Web Development, producting the Quality work</span>
            </div>
            <button className='button intro-button'>Hire Me</button>
            {/* <div className="intro-icons">
                <a href="https://github.com/YoonMeMe-engr" target='_blank'>
                    <i style={{color: 'orange'}} class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.facebook.com/YoonMeMe.Engr" target='_blank'>
                    <i style={{color: 'orange'}} class="fa-brands fa-square-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/in/yoon-me-me-b6b58824a/" target='_blank'>
                    <i style={{color: 'orange'}} class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://www.youtube.com/@Engr.YoonMeMe" target='_blank'>
                    <i style={{color: 'orange'}} class="fa-brands fa-youtube"></i>
                </a>
            </div> */}
        </div>
        <div className="intro-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={YMMPhoto} alt="" />
            <motion.img
            initial={{left: '-36%'}}
            whileInView={{left: '-24%'}}
            transition={transition}
            src={GlassesEMOJI} alt="" />
            <motion.div
             initial={{left: '74%', top: '-4%'}}
             whileInView={{left: '68%'}}
             transition={transition}
            style={{top: '-4%', left: '68%'}}
            className='floating-div'
            >
                <FloatingDiv image={Crown} txt1={'IT'} txt2={'Engineer'}></FloatingDiv>
            </motion.div>
            <motion.div
             initial={{left: '9rem', top: '18rem'}}
             whileInView={{left: '-8rem'}}
             transition={transition}
            style={{top: '18rem', left: '-6rem'}}
            className='floating-div'
            >
                <FloatingDiv image={ThumbUp} txt1={'Telecom'} txt2={'Engineer'}></FloatingDiv>
            </motion.div>
            <motion.div
             initial={{right: '-15rem', top: '22rem'}}
             whileInView={{right: '-1rem'}}
             transition={transition}
            style={{top: '23rem', right: '-1rem'}}
            className='floating-div'
            >
                <FloatingDiv image={Happy} txt1={'Web'} txt2={'Development'}></FloatingDiv>
            </motion.div>
            <div className="blur" style={{background: "#eeeeee",
                top: '-10%',
                left: '-10%'
            }}></div>
            <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
            <div className="blur" style={{
                background: 'khaki',
                top: '17rem',
                width: '21rem',
                height: '11rem',
                left: '-9rem',
            }}></div>
            <div className="blur" style={{
                background: 'lightblue',
                top: '19rem',
                width: '21rem',
                height: '11rem',
                right: '-1rem',
            }}></div>
            <div className="blur" style={{background: "#a4a2a2",
                top: '19rem',
                left: '1rem'
            }}></div>
        </div>
    </div>
  )
}

export default Intro
