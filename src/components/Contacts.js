import React from 'react'
import pdf from './images/HemaResume.pdf'

function Contacts() {
    return (
      <div className='contacts'>
        <div className='about-me'>
          <p>Seeking a challenging position in a reputable organization to expand my learning, knowledge, 
            and skills. To secure a responsible career opportunity to fully utilize my training and skills, 
            while making a significant contribution to the success of the company.</p>
        </div>
        <div className='contact'>
          <h1>Contact Me</h1>
          <ul><i class="fa-solid fa-envelope"></i>hemanathanc7@gmail.com</ul>
          <ul><i class="fa-solid fa-phone"></i>+91 8524998472</ul>
          <div class="social-icons">
                      <a href="" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                      <a href="https://www.linkedin.com/in/hemanathan-c-3b3722227/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                      <a href="" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                      <a href="https://github.com/HemanathanC" target="_blank"><i class="fa-brands fa-github"></i></a>
                  </div>
                  <a href={pdf} download="HemanathanC" target="_blank"class="btn btn-outline-primary">Download CV</a>
        </div>
      </div>
    )
  }

export default Contacts;
