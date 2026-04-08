import React, {Component} from 'react';
import { FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";
import './Header.css';

class Header extends Component {
    render() {
        return ( 
            <div className="header-section">
                <li className='header-details'>
                    <FaRegEnvelope className='header-icon' />
                      <span className='header-contact-details'>radhahitechhyd@gmail.com</span>
                </li>
                <li>
                    <FaPhoneAlt className='header-icon' />
                    <span className='header-contact-details'> +91 8008 33 22 99 / +91 80960 11011</span>
                </li>
                <li className='header-links-container'>
                    <a href='/' className='header-links'>Home</a>
                    <a href='/about-us' className='header-links'>About Us</a>
                    <a href='/location-overview' className='header-links'>Location & Overview</a>
                    <a href='/contact' className='header-links'>Contact Us</a>
                </li>
            </div>
        );
    }
}

export default Header;