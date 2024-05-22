import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpg'

const Hero = () => {
  return (
    <div className='hero'>

        <img src={profile} alt="" />
        <h1><span>I am Dhruv Nehru,</span> frontend developer based in Bhubaneswar.</h1>
        <p>Programming made the impossible possible. You can have a null character and a constant variable</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My Resume</div>
        </div>

    </div>
  )
}

export default Hero
