import React from 'react'
import './featureProduct.css'
import { Link } from 'react-router-dom'

const FeatureProduct = () => {
    return (
        <>
            <div className="featureproduct-section">
                <div className="container">
                    <div className="row-1 same-row">
                        <div className="col-1 col-same">
                            <div className='p-up'>
                                <p>Best quality printed tshirts and mugs for all your needs</p>
                            </div>
                        </div>
                        <div className="col-2 col-same">

                        </div>
                        <div className="col-3 col-same">

                        </div>
                        <div className="col-4 col-same">
                            <p>GET PRINTED T-SHIRT @ $25!</p>
                            <Link to={'/product'}>Visit Store <i class="ri-arrow-right-double-fill"></i></Link>
                        </div>
                    </div>
                    <div className="row-2 same-row">
                        <div className="col-1 col-same">
                            <div className="p-down">
                                <p>GET NEW DESIGN PANTS @ $25!</p>
                                <Link to={'/product'}>Visit Store <i class="ri-arrow-right-double-fill"></i></Link>
                            </div>
                        </div>
                        <div className="col-2 col-same">

                        </div>
                        <div className="col-3 col-same">

                        </div>
                        <div className="col-4 col-same">
                        <i class="ri-add-circle-line"></i>
                        <p>Get Your Own</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureProduct
