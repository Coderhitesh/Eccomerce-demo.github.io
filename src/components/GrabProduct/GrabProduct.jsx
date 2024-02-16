import React from 'react'
import './grabProduct.css'
import { Link } from 'react-router-dom'

const GrabProduct = () => {
  return (
    <>
      <div className="grab-product-secton">
        <div className="container">
            <div className='left'>
                <h3>GRAB THIS LIMITED TIME OFFER</h3>
            </div>
            <div className='right'>
            <Link to={'/product'}>Explore Store <i class="ri-arrow-right-double-fill"></i></Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default GrabProduct
