import React from 'react'
import './contact.css'

function Contact() {
    return (
        <section className='contact-section'>
            <div className="container">
                <div className="contact-box">
                    <div className="heading">
                        <span>Contact Us</span>
                        <p>Have a question or need assistance?</p>
                        <p>Our friendly team will do their very best to help you out!</p>
                    </div>
                    <div className="contact-detail">
                        <div className="left">
                            <h3>Get in Touch</h3>
                            <p>Take a minute to see the FAQ section below, we hope it will answer some of your common queries. In case you still haven't found your answer, here's how you can contact us:</p>
                            <div className="call-left">
                                <h4>Call us at:</h4>
                                <a href="tel: +91 674 3168075">+91 6743168075</a>
                            </div>
                            <div className="mail-left">
                                <h4>For Support and Queries:</h4>
                                <a href="mailto: contact@tripathagatextiles.com">contact@tripathagatextiles.com</a>
                            </div>
                            <div className="social-links">
                            <i class="ri-facebook-box-fill"></i>
                            <i class="ri-instagram-fill"></i>
                            <i class="ri-linkedin-box-fill"></i>
                            </div>
                        </div>
                        <div className="right">
                            <h3>Send Us a Message</h3>
                            <form action="">
                                <div className="name fields">
                                    <input type="text" placeholder="Enter Your Name" />
                                </div>
                                <div className="email fields">
                                    <input type="email" placeholder="Enter Your Email" />
                                </div>
                                <div className="subjec fields">
                                    <input type="text" placeholder="Subject" />
                                </div>
                                <div className="message fields">
                                    <textarea name="message" placeholder='Message' id="" ></textarea>
                                </div>
                                <button className='submit-btn' type='submit'>
                                    <div>
                                        <span>
                                            <p>Submit</p><p>:)</p>
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            <p>Thanks</p><p>:D</p>
                                        </span>
                                    </div>
                                </button>
                                {/* <button type="submit">Submit Now</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
