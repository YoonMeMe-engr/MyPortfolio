import React from 'react'
import './Portfolio.css'
import YouTube1 from '../../assets/img/YouTube1.jpg'
import YouTube2 from '../../assets/img/YouTube2.jpg'
import YouTube3 from '../../assets/img/YouTube3.png'
import YouTube4 from '../../assets/img/YouTube4.png'
import YouTube5 from '../../assets/img/YouTube5.png'
import YouTube6 from '../../assets/img/YouTube6.png'
import YouTube7 from '../../assets/img/YouTube7.png'
import YouTube8 from '../../assets/img/YouTube8.jpg'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { Autoplay} from 'swiper/modules'

const Portfolio = () => {
  
  return (
    <div className='portfolio' id='Portfolio'>
        <span>Recent Projects</span>
        <span>Portfolio</span>
        <Swiper
        modules={[Autoplay]}
        slidesPerView={'auto'}
        autoplay={{delay: 1000}}
        spaceBetween={10}
        loop={true}
        speed={6500}
        freeMode={true}
        // grabCursor={true}
        className='portfolio-slider'
        >
          <SwiperSlide>
            <img src={YouTube1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={YouTube2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={YouTube3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={YouTube4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={YouTube5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={YouTube6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={YouTube7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={YouTube8} alt="" />
          </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio