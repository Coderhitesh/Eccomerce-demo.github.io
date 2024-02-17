import React from 'react'
import './productDesign.css'
import { Link } from 'react-router-dom'

function ProductDesign() {
  return (
    <>
      <div className="productdesign-section">
        <div className="container">
          <div className="left">
            <div className='up'>
              <h3>HUNDREDS OF READY DESIGNS TO CHOOSE FROM</h3>
              <p>Nam at congue diam etiam erat lectus, finibus eget commodo quis, congue diam etiam erat lectus.</p>
            </div>
            <Link to=''>Explore Design  <i class="ri-arrow-right-double-fill"></i></Link>
          </div>
          <div className="right">
            <img src="https://i.ibb.co/t24yHLJ/photo-1527723503749-9e61addd1b3e.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDesign
