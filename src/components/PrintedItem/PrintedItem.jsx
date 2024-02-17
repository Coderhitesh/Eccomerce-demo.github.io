import React from 'react'
import './printedItem.css'
import { Link } from 'react-router-dom'

function PrintedItem() {
  return (
    <>
      <div className="printeditem-section">
        <div className="container">
            <div className="left same-box-parent">
                <div className="box">
                    <h3>PRINTED TSHIRT FOR $25!</h3>
                    <p>Upgrade your wardrobe with a fashionable printed t-shirt, available now for just $25.</p>
                    <Link to=''>ORDER NOW  <i class="ri-arrow-right-double-fill"></i></Link>
                </div>
            </div>
            <div className="right same-box-parent">
                <div className="box">
                    <h3>New Designed Maxi FOR $25!</h3>
                    <p>Elevate your wardrobe with this stylish and affordable fashion statement today.</p>
                    <Link to=''>EXPLORE DESIGNS  <i class="ri-arrow-right-double-fill"></i></Link>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default PrintedItem
