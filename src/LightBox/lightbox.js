import React, {Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from '../Footer/Footer';
import Copyright from '../CopyrightSection/Copyright';

import './lightbox.css';


class LightBox extends Component { 
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

            <div className="light-box-container">
                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-3.05.29-PM.jpeg" 
                alt="lightbox" className='light-box-image' />
                 <SocialMedia title="Light Box" />

                <div className='light-box-section'>
                    <h1 className='light-box-heading'>Illluminate Your Brand with Eye-Catching Light Box Signs</h1>
                <p className='light-box-paragraph'>Radha Hi-Tech developed an 
                    elegant indoor lightbox with a depth of only 75mm (single-sided)
                     or 100mm (double- sided). </p>
                <p className='light-box-paragraph'>The hinging frame on top makes
                     maintenance and a quick change of the acrylic panels 
                     and/or graphics extremely easy. </p>
                     <p className='light-box-paragraph'> The hinging frame comes in 2 versions. 
                        One has the typical I-Sign look with the thin edge. 
                        The other one has an edge of 12.5mm which allows for the acrylic panels to be fully illuminated.
                     </p>
                     <p className='light-box-paragraph'>The perfect lightbox for airports, metro stations, garages, etc.</p>
                </div>
                

                     <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-3.05.29-PM-2.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-3.05.29-PM-1.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-3.05.29-PM-3.jpeg" alt='slide-image' className="slide-image" />
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
export default LightBox;            