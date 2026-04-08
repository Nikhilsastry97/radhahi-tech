import React, { Component } from 'react';
import { FaMapMarkerAlt, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <img src="https://radhahitech.com/wp-content/uploads/2022/03/ytrewq.png" alt="company-logo"
                            className="footer-logo" />
                        <p className='footer-description'>
                            Established in 2009, Radha Hi <br />
                            Tech Print Solutions is a leading <br />
                            manufacturer of LED signboards,<br />
                            digital signage, and high-quality <br />
                            printing solutions based in Hyderabad.
                        </p>
                    </div>


                    <div className='footer-section'>
                        <h1 className='footer-heading'>Quick Links</h1>
                        <ul className='footer-links'>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href='/our-services'>Our Services</a></li>
                            <li><a href='/gallery'>Gallery</a></li>
                            <li><a href='/contact'>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className='footer-section'>
                        <h1 className='footer-heading'>Our Services</h1>
                        <ul className='footer-links'>
                            <li><a href="/led-signages">LED Signages</a></li>
                            <li><a href="/glow-sign-boards">Glow Sign Boards</a></li>
                            <li><a href='/eco-solvent-printing'>Eco-Solvent Printing</a></li>
                            <li><a href='/one-way-vision-front-lit-back-lit'>One-Way Vision Front Lit & Back Lit</a></li>
                            <li><a href='/vinyl-printing'>Vinyl Printing</a></li>
                        </ul>
                    </div>
                                <div className='footer-section'>
                <h1 className='footer-heading'>Contact Details</h1>
                <ul className="footer-links">
                    <li>
                        <FaMapMarkerAlt className='footer-icon' />
                        <span className='footer-contact-details'>
                            9-135, Street No.5, H.M.T NAGAR, <br />
                            NACHARAM, HYDERABAD - 76
                        </span>
                    </li>
                    <li>
                        <FaRegEnvelope className='footer-icon' />
                        <span className='footer-contact-details'>info@radhahitech.com</span>
                    </li>
                    <li>
                        <FaRegEnvelope className='footer-icon' />
                        <span className='footer-contact-details'>radhahitech@gmail.com</span>
                    </li>
                    <li>
                        <FaPhoneAlt className='footer-icon' />
                        <span className='footer-contact-details'>
                            +91 8008 33 22 99, +91 80960 11011
                        </span>
                    </li>
                </ul>
            </div>
            </div>
            </div>
        );
    }
}

export default Footer;