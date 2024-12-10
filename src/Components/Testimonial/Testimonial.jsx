
import React from 'react'
import './Testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Profile1 from '../../assets/img/Profile1.png'
import Profile2 from '../../assets/img/Profile2.png'
import Profile3 from '../../assets/img/Profile3.png'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css/pagination';

const Testimonial = () => {
    const sources = [
        {
            img: Profile1,
            selfReflection:
            "I'm Ms. Yoon Me Me from Nay Pyi Taw. I have been graduated with Bachelor of Engineering (Electronics & Communications) major in 2014. Programming Language is one of my interested careers. I feel happy when I was coding. Please support me with encourage to do the best."
        },
        {
            img: Profile2,
            selfReflection:
            "I'm Ms. Yoon Me Me from Nay Pyi Taw. I have been graduated with Bachelor of Engineering (Electronics & Communications) major in 2014. Programming Language is one of my interested careers. I feel happy when I was coding. Please support me with encourage to do the best."
        },
        {
            img: Profile3,
            selfReflection:
            "I'm Ms. Yoon Me Me from Nay Pyi Taw. I have been graduated with Bachelor of Engineering (Electronics & Communications) major in 2014. Programming Language is one of my interested careers. I feel happy when I was coding. Please support me with encourage to do the best."
        }
    ]
  return (
    <div className='t-wrapper' id='Testimonial'>
        <div className="t-heading">
            <span>Clients always get </span>
            <span>Exceptional Work </span>
            <span>from me...</span>
            <div className="blur t-blur1" style={{background: 'var(--purple'}}></div>
            <div className="blur t-blur2" style={{background: 'skyblue'}}></div>
        </div>

        {/* Slider */}
        <Swiper 
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{delay: 3000}}
        pagination={{clickable: true,
        autoPlay: true
        }}
        >
            {sources.map((source, index) => {
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={source.img} alt="" />
                            <span>{source.selfReflection}</span>
                        </div>
                    </SwiperSlide>
                )
            })
            }
        </Swiper>
    </div>
  )
}

export default Testimonial
