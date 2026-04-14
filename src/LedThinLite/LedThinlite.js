import React, {Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from '../Footer/Footer';
import Copyright from '../CopyrightSection/Copyright';

import './LedThinLite.css';


class LedThinLite extends Component { 
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

            <div className="led-thin-lite-container">
                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-4.10.32-PM-1.jpeg" 
                alt="led-thin-lite" className='led-thin-lite-image' />
                 <SocialMedia title="Led Thinlite" />

                <div className='led-thin-lite-section'>
                <p className='led-thin-lite-paragraph'> LED Thinlites are elegant, silver anodised poster 
                    frames with integrated LED Light Sheets. The thin LED frames have rounded 
                    corners and hidden leaf springs. </p>
                <p className='led-thin-lite-paragraph'> LED Thinlites can be supplied in both single-
                     and double-sided versions in various standard sizes. Custom-made versions 
                     (with regard to dimensions, colours, indoor/outdoor use, with or without a switch, etc.) 
                     can also be supplied. Radha Hi-Tech can also supply the aluminium profiles 
                     and accessories to assemble your LED Thinlites yourself. </p>
                     
                </div>
                

                     <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-4.10.32-PM.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-4.10.31-PM.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-4.10.31-PM-1.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-4.10.31-PM-2.jpeg" alt='slide-image' className="slide-image" />
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
export default LedThinLite;            