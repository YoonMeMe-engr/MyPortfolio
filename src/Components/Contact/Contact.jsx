
import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_14093lw', 'template_ao9mj6q', form.current, {
        publicKey: '9bsfx238BjC8P16-t',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      )
    };
  return (
    <div className='contact-form' id='contact'>
        <div className="c-left">
            <span>Get in touch</span>
            <span>Contact me</span>
            <div className="blur c-blur1" style={{background: '#ABF1FF94'}}></div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail} action="">
                <input type="text" name='user_name' className='user' placeholder='Your Name' required/>
                <input type="email" name='user_email' className='user' placeholder='Your Email' required/>
                {/* <input type="text" name='user_phone' className='user' placeholder='Your Phone Number' required/>
                <input type="text" name='user_subject' className='user' placeholder='Subject' required/> */}
                <textarea name="message" className='user' placeholder='Message' id="" required></textarea>
                <input type="submit" value='Send' className='button' />
                <span>{done && 'Thanks for contact in me!'}</span>
                <div className="blur c-blur2" style={{background: 'var(--purple)'}}></div>
            </form>
        </div>
    </div>
  );
};

export default Contact
