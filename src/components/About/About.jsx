import React from 'react'
import './about.css'

function About() {
    return (
        <section className='about-seciton'>
            <div className="container">
                <div className="heading">
                    <span>About Us</span>
                </div>
                <div className="about-detail1">
                    <div className="about-detail-box">
                        <div className="left">
                            <img src="https://i.ibb.co/LvvFPKy/photo-1591380816222-28cec94b49c8.jpg" alt="" />
                        </div>
                        <div className="right">
                            <h3>Who We Are?</h3>
                            <p>Tripathaga Textiles originated as a fabric trading enterprise in India in 2017. It has since evolved, venturing into knitted fabric production and global garment exports. With cutting-edge machinery, it specializes in woven and knitted apparel, including women's and children's wear, prioritizing top-tier quality and competitive pricing. Their meticulous quality assurance and unwavering commitment to customer contentment have propelled them to the forefront of the fashion realm.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
