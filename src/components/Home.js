import React from 'react'
import me from './images/me.jpg'
import me1 from './images/me1.png'

function Home() {
  return (
    <div className='home'>
      <div className='d-lg-flex justify-content-center'>
        <img src={me1} alt='not found'></img>
        <div className='about'>
          <h1>Hi, I'm <span>Hemanathan Chandran</span> from Tiruttani</h1><br/>
          <p>Web Developer</p>
        </div>
      </div>
    </div>
      
  )
}
export default Home;
