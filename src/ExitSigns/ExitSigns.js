import React, {Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from '../Footer/Footer';
import Copyright from '../CopyrightSection/Copyright';

import './ExitSigns.css';


class ExitSigns extends Component { 
    render() {
       const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,   
        speed: 3000,        
        cssEase: "linear",  
        arrows: false,
        pauseOnHover: false
    };

        return (
            <>
            <Header />
            <Navbar />

            <div className="exit-signs-container">
                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-2.56.13-PM-4.jpeg" 
                alt="exit-signs" className='exit-signs-image' />
                 <SocialMedia title="Illuminated Exit Signs" />

                <div className='exit-signs-section'>
                    <h1 className='exit-signs-heading'>Enhancing Safety with High-Visibility Emergency Exit Signage</h1>
                <p className='exit-signs-paragraph'>Fire Exit Signs are a critical part of the 
                    emergency exit strategy. An effective fire exit safety plan needs to be 
                    prepared for all premises. </p>
                <p className='exit-signs-paragraph'>With our new product range, 
                    we bring a solution with 3 hours battery backup. 
                    Three elegant models which can be wall-mounted, ceiling suspended, 
                    ceiling recessed or projected. </p>
                     <p className='exit-signs-paragraph'> All models carry out self testing and 
                        indicate failure through a led. A button is also provided 
                        for physical testing.
                     </p>
                </div>
                

                     <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-2.56.13-PM-2.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-2.56.13-PM.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-2.56.13-PM-1.jpeg" alt='slide-image' className="slide-image" />
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
export default ExitSigns;            