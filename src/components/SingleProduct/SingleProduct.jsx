import React, { useEffect, useState } from 'react';
import './singleProduct.css'
import { Link } from 'react-router-dom';

function SingleProductComponent() {
    const [itemData, setItemData] = useState(null);

    useEffect(() => {
        // Decode the Base64 encoded string from the URL
        const encodedItem = window.location.pathname.split('/').pop(); // Get the encoded item string from the URL
        const decodedItem = JSON.parse(atob(encodedItem)); // Decode the Base64 string and parse it into JSON

        // Set the decoded item data to state
        console.log(decodedItem)
        setItemData(decodedItem);
    }, []);

    if (!itemData) {
        return <div>Loading...</div>;
    }

    // Now you can access itemData, which contains all metadata details of the product
    console.log(itemData);

    return (
        <section className='single-product-section'>
            <div className="container">
                <div className="main-box-single">
                    <div className="left">
                        <img src={itemData.img} alt="Product-image" />
                    </div>
                    <div className="right">
                        <span className='cat'>{itemData.category}</span>
                        <h2 className='name'>{itemData.name}</h2>
                        <div className="price">
                            <del className='dis'>Rs.{itemData.discountprice}</del>
                            <span className='price'>Rs. {itemData.price}</span>
                        </div>
                        <span className='dec'>{itemData.dec}</span>
                        <div className="star">
                            <i class="ri-star-line"></i>
                            <i class="ri-star-line"></i>
                            <i class="ri-star-line"></i>
                            <i class="ri-star-line"></i>
                            <i class="ri-star-line"></i>
                        </div>
                        <span className='size'>{itemData.size}</span>
                        <Link to={'/contact'} className='product-contact' >
                        <div>
                                        <span>
                                            <p>Contact Us</p><p>:)</p>
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            <p>Thanks</p><p>:D</p>
                                        </span>
                                    </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SingleProductComponent;
