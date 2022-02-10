import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import Navbar from '../../Navbar/Navbar';
import Header from '../../Header/Header';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vhawi96', 'template_4lc24dq', form.current, 'user_Tkxc2CtD1Mc8hjtjGxpKJ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          alert("Email Send!");
      };

    return (
        <>
            <Navbar />
            <Header />
            <div className='contact-section'>
            <div className='contact-info'>
                <p><i class="fas fa-map-marker-alt"></i>Address, City, Country</p>
                <p><i class="fas fa-envelope"></i>abc@gmail.com</p>
                <p><i class="fas fa-phone"></i>+00 0000 000 000</p>
                <p><i class="fas fa-clock"></i>Mon - Sat 8:00 AM to 5:00 PM</p>  
            </div>
            <div className='contact-form'>
                <h2>CONTACT US</h2>
                <h3> </h3>
                <form ref={form} onSubmit={sendEmail} autoComplete='off'>
                    
                    <input type="text" name="user_name" className='text-box' placeholder="Your Name" required />
                    <input type="email" name="user_email" className='text-box' placeholder="Your Email" required />             
                    <textarea name="message" id="Message" placeholder="Your Message" required></textarea>
                    <input type="submit" name='submit' className='send-btn' value="Send" />
                </form>
            </div>
            </div>
        
        </>
        
    );
};

export default Contact;