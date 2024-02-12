import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <div className='hero-section'>
        <div className="container">
            <div className="hero-detail">
                <h2>CUSTOMIZED PRINTED TEES</h2>
                <p>Nam at congue diam etiam erat lectus, finibus eget commodo quis, congue diam etiam erat lectus.</p>
                <Link to={'/product'}>Explore Store <i class="ri-arrow-right-double-fill"></i></Link>
            </div>
            
            <div className="hero-image">
                <img src='https://i.ibb.co/0KdcVjw/hero.png' alt="hero" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero
