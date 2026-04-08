import React, {Component} from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SocialMedia from "../SocialMedia/SocialMedia";
import {FaMapMarkerAlt, FaRegEnvelope, FaPhoneAlt, FaRegClock} from "react-icons/fa";
import Footer from "../Footer/Footer";
import Copyright from "../CopyrightSection/Copyright";
import './ContactUs.css';

class ContactUs extends Component {
    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <div className="contact-page-header">
                </div>
                <SocialMedia title="Contact Us" />
                <div className='contact-page-section'>
                    <div className='contact-form-container'>
                        <form className='contact-form'>
                            <label>Name</label>
                            <input type="text" placeholder="Name" />
                             <label>Email</label>
                            <input type="email" placeholder="Email" />
                             <label>Phone</label>
                            <input type="text" placeholder="Phone" />
                             <label>Message</label>
                            <textarea  placeholder="Message" > </textarea>
                            <button className='contact-form-button' type="submit">Submit</button>
                        </form>
                        </div>
                         <div className='contact-info-container'>
                        <p className="contact-subtitle">Contact Info to</p>
                        <h1>Reach Our Expert Team</h1>
                        <p className="contact-description">
                            Send a message through given form, If your enquiry is time sensitive please use below contact details.
                        </p>

                        <ul className="contact-details">
                    <li> <FaMapMarkerAlt className='contact-icon' />
                            <span className='contact-text'> 9-135, Street No.5, H.M.T NAGAR, NACHARAM, HYDERABAD - 76 </span>
                            </li>
                             <li> <FaRegEnvelope  className='contact-icon' />
                            <span className='contact-text'>info@radhahitech.com </span>
                            </li>
                            <li> <FaRegEnvelope className='contact-icon' />
                            <span className='contact-text'>radhahitechhyd@gmail.com </span>
                            </li>
                            <li> <FaPhoneAlt className='contact-icon' />
                            <span className='contact-text'> +91 8008 33 22 99</span>
                            </li>
                            <li> <FaPhoneAlt className='contact-icon' />
                            <span className='contact-text'> +91 80960 11011</span>
                            </li>
                            <li> <FaRegClock className='contact-icon' />
                            <span className='contact-text'> Monday to Saturday : 10.00 to 08.00 (Sunday: Closed)</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <Footer/>
                <Copyright/>
                </div>
        );
    }   

}

export default ContactUs;