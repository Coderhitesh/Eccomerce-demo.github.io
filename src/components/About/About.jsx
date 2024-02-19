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
                            <img src="https://i.ibb.co/LvvFPKy/photo-1591380816222-28cec94b49c8.jpg" alt="factory" />
                        </div>
                        <div className="right">
                            <h3>Who We Are?</h3>
                            <p>Tripathaga Textiles originated as a fabric trading enterprise in India in 2017. It has since evolved, venturing into knitted fabric production and global garment exports. With cutting-edge machinery, it specializes in woven and knitted apparel, including women's and children's wear, prioritizing top-tier quality and competitive pricing. Their meticulous quality assurance and unwavering commitment to customer contentment have propelled them to the forefront of the fashion realm.</p>
                        </div>
                    </div>
                </div>
                <div className="about-detail2">
                    <div className='detail2-heading'>
                        <span>Why Choose Us?</span>
                    </div>
                    <ul>
                        <p>01) Diverse Expertise:- <span>Originating as a fabric trading entity and now excelling in knitted fabric manufacturing and global garment exports, we offer a comprehensive range of textile solutions.</span></p>
                        <p>02) Global Reach:- <span>With our widespread export network, we deliver our products to various corners of the world, ensuring accessibility and convenience for our customers worldwide.</span></p>
                        <p>03) Cutting-Edge Technology:- <span>Equipped with state-of-the-art machinery, we specialize in both woven and knitted garments, enabling us to meet diverse customer needs with precision and efficiency.</span></p>
                        <p>04) Commitment to Quality:- <span>Our rigorous quality control measures ensure that each product meets the highest standards, reflecting our unwavering dedication to delivering excellence in every garment.</span></p>
                        <p>05) Competitive Pricing:- <span>Despite our commitment to quality, we strive to maintain competitive prices, ensuring that our customers receive exceptional value for their investment.</span></p>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About
