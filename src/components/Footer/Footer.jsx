import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import logo from '../Header/Logo.png'

const Footer = () => {
  return (
    <footer>
      <div className="container">
      <div className="col1 col-same">
          <div className="img">
            <Link to='/'><img src={logo} alt="" /></Link>
          </div>
          <p>Our company has become synonymous with quality as all our products exhibit high quality standards. Our team of trained professionals keeps a close.....</p>
        </div>
        <div className="col2 col-same">
          <h3>ONLINE SHOPPING</h3>
          <ul>
            <li>
              <Link to=''>Mens</Link>
            </li>
            <li>
              <Link to=''>Womens</Link>
            </li>
            <li>
              <Link to=''>Kids</Link>
            </li>
          </ul>
        </div>
        <div className="col3 col-same">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/privacy'>Privacy Policy</Link>
            </li>
          </ul>
        </div>
        
        <div className="col4 col-same">
          <h3>CONTACT INFO</h3>
          <div className="contactinfobox">
            <p>Plot No-B 52/53, near to DLF Cybercity- Mindfire Solutions, Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha 751023</p>
            <a href="tel: +91 674 3168075">+91 6743168075</a>
            <a href="mailto: contact@tripathagatextiles.com">contact@tripathagatextiles.com</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
