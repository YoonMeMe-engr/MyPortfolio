import React from 'react'
import './Footer.css'
import Wave from '../../assets/img/wave.png'
import YouTube from '../../assets/img/YouTubeF.png'
import Facebook from '../../assets/img/FacebookF.png'
import LinkedIn from '../../assets/img/LinkedInF.png'
import GitHub from '../../assets/img/GitHubF.png'

const Footer = () => {
  const top = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  return (
    <div className=''>
        <div className="footer">
            <img src={Wave} alt="" style={{width: '100%', height: '20rem'}} />
            <div className="f-content">
                <span>yoonmeme.engr@gmail.com</span>
                <div className="f-icons">
                  <a href="https://www.youtube.com/@Engr.YoonMeMe" target='_blank'>
                    <img src={YouTube} alt="" />
                  </a>
                  <a href="https://www.facebook.com/YoonMeMe.Engr" target='_blank'>
                    <img src={Facebook} alt="" />
                  </a>
                  <a href="https://www.linkedin.com/in/yoon-me-me-b6b58824a/" target='_blank'>
                    <img src={LinkedIn} alt="" />
                  </a>
                  <a href="https://github.com/YoonMeMe-engr" target='_blank'>
                    <img src={GitHub} alt="" />
                  </a>
                </div>
            </div>
            <button onClick={top} className='back-to-top'>
              <i class="fa-solid fa-arrow-up"></i>
            </button>
        </div>
    </div>
  )
}

export default Footer