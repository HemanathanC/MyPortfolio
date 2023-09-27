import React from 'react'
import me from './images/me.jpg'

function Home() {
  return (
    <div className='home'>
      <div className='d-flex justify-content-center'>
        <div className='circular--portrait'>
          <img src={me} alt='not found'></img>
        </div>
        <div className='about'>
          <h1>Hi, I'm <span>Hemanathan Chandran</span> from Chennai</h1><br/>
          <p>Web Developer</p>
        </div>
      </div>
    </div>
      
  )
}
export default Home;
