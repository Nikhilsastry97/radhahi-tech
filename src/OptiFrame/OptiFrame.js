import React, {Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from '../Footer/Footer';
import Copyright from '../CopyrightSection/Copyright';

import './OptiFrame.css';


class OptiFrame extends Component { 
    render() {
       const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 20000,   
        speed: 20000,           
        cssEase: "ease",       
        arrows: false,
        pauseOnHover: true
    };

        return (
            <>
            <Header />
            <Navbar />

            <div className="opti-frame-container">
                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-3.23.13-PM.jpeg" 
                alt="opti-frame" className='opti-frame-image' />
                 <SocialMedia title="Opti Frame" />

                <div className='opti-frame-section'>
                <p className='opti-frame-paragraph'>Our R&D team has focused their extensive knowledge on 
                    transforming production processes to create a completely new type of 
                    front-opening display frame. </p>
                <p className='opti-frame-paragraph'>Opti-Frame not only delivers multi-functional applications 
                    with a variety of mounting options, but is specifically engineered to offer very 
                    competitive rates in snap frame market. </p>
                     <p className='opti-frame-paragraph'> The product is protected world wide with 
                        relevant patent applications and has DE and OHIM certification.
                        Our opti frame family progressively welcomes new additions in sizes.
                     </p>
                     <h1 className='opti-frame-heading'>FEATURES</h1>
                     <ul className='opti-frame-features'>
                        <li>Colored Pad Printing on Profile</li>
                        <li>Press Lettering on Profile</li>
                        <li>Portrait and Landscape Usage</li>
                        <li>Multifunctional Usage</li>
                        <li>Round and Mitred Cornered Profile Option</li>
                        <li>Round Corner Piece and L-Type Connector Move Together Aluminium Profiles Fixed on One-piece Unique Backing</li>
                        <li>One-Piece Main Body</li>
                        <li>Poster and Protection Cover are Placed Easily Into It</li>
                        <li>Poster and Protection Cover are Placed Easily Into It</li>
                        <li>Mass Production is Quick</li>
                     </ul>
                </div>
                

                     <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-3.19.21-PM-1.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-3.19.21-PM.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-3.19.14-PM.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-3.19.10-PM.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                        </Slider>
                    </div>
                     
                </div>
           
            
                <Footer/>
                <Copyright/>
            </>
        );
    }   
}
export default OptiFrame;            