import React from 'react'
import './homeProduct.css'
import { Link } from 'react-router-dom'

function WomenProduct({womendata}) {
  return (
    <>
      <div className='product-row'>
        {
          womendata && womendata.map((item, index) => (
            <div className='col' key={index}>
                <div className="img">
                    <img src={item.img} alt="product-img" />
                    <p className='tag'>
                        {item.tag}
                    </p>
                    <Link to='' >Quick View</Link>
                </div>
                <div className="product-detail">
                    <p>{item.category}</p>
                    <h3>{item.name}</h3>
                    <div className="star">
                    <i class="ri-star-line"></i>
                    <i class="ri-star-line"></i>
                    <i class="ri-star-line"></i>
                    <i class="ri-star-line"></i>
                    <i class="ri-star-line"></i>
                    </div>
                    <div className="prices">
                        <del>{item.discountprice}</del>
                        <span>{item.price}</span>
                    </div>
                </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default WomenProduct
