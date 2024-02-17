import React from 'react'
import './homeProduct.css'
import { Link } from 'react-router-dom'

function KidsProduct() {
  const pass = (item) => {
    const encodedItem = btoa(JSON.stringify(item)); // Encode the item object to Base64
    window.location.href = `/single-product/${encodedItem}`;
  };

  const kiddata = [
    {
        sno: 1,
        category:'Kids',
        name: 'MPOL001',
        dec: 'Our Golf Polos are specifically designed for those twists & turns.',
        size: ' XS to 3XL',
        img: 'https://i.ibb.co/yY606cs/photo-1600328759671-85927887458d.jpg',
        tag: 'Sale!',
        discountprice: 'Rs.2000',
        price:'Rs.499'
    },
    {
        sno: 2,
        category:'Kids',
        name: 'MPOL006',
        dec: 'Polos with 100% polyester , quick dry and soft on skin. ',
        size : ' XS to 3XL',
        img: 'https://i.ibb.co/yY606cs/photo-1600328759671-85927887458d.jpg',
        tag: 'Sale!',
        discountprice: 'Rs.2000',
        price:'Rs.499'
    },
    {
        sno: 3,
        category:'Kids',
        name: 'MPOL008',
        dec: ' The Mars Polo with FABTECH(R) technology is designed for all day ultra cool comfort.',
        size: ' XS to 3XL',
        img: 'https://i.ibb.co/yY606cs/photo-1600328759671-85927887458d.jpg',
        tag: 'Sale!',
        discountprice: 'Rs.2000',
        price:'Rs.499'
    },
    {
        sno: 4,
        category:'Kids',
        name: '1986BK',
        dec: 'Our printed tees will not only make you feel good but they are truly comfortable.',
        size: ' XS to 3XL',
        img: 'https://i.ibb.co/yY606cs/photo-1600328759671-85927887458d.jpg',
        tag: 'Sale!',
        discountprice: 'Rs.2000',
        price:'Rs.499'
    },
    {
        sno: 4,
        category:'Kids',
        name: '1986BK',
        dec: 'Our printed tees will not only make you feel good but they are truly comfortable.',
        size: ' XS to 3XL',
        img: 'https://i.ibb.co/yY606cs/photo-1600328759671-85927887458d.jpg',
        tag: 'Sale!',
        discountprice: 'Rs.2000',
        price:'Rs.499'
    },
    {
        sno: 4,
        category:'Kids',
        name: '1986BK',
        dec: 'Our printed tees will not only make you feel good but they are truly comfortable.',
        size: ' XS to 3XL',
        img: 'https://i.ibb.co/yY606cs/photo-1600328759671-85927887458d.jpg',
        tag: 'Sale!',
        discountprice: 'Rs.2000',
        price:'Rs.499'
    }
]

  return (
    <>
    <div className="product-heading">
        <span>Kids Product</span>
      </div>
      <div className='product-row'>
        {
          kiddata && kiddata.map((item, index) => (
            <div onClick={() => pass(item)} className='col' key={index}>
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
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
                    <i className="ri-star-line"></i>
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

export default KidsProduct
