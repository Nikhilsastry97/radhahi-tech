import React, {Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from '../Footer/Footer';
import Copyright from '../CopyrightSection/Copyright';

import './Totem.css';


class Totem extends Component { 
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

            <div className="totem-container">
                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-3.05.29-PM.jpeg" 
                alt="totem" className='totem-image' />
                 <SocialMedia title="Totem" />

                <div className='totem-section'>
                    <h1 className='totem-heading'> Make a Bold Statement with High-Impact Totem Pylon Signs </h1>
                <p className='totem-paragraph'> Everyone is familiar with Radha Hi-Tech
                     ‘classic’ totem profiles, which are used to make illuminated 
                     or non-illuminated elegant, curved or elliptical pillars. </p>
                <p className='totem-paragraph'> Depending on the application, location, 
                    and desired size, the signmaker can choose our totem pylon 50mm or
                     totem pylon 80mm for smaller totems (up to 3 meters) or our totem 
                     pylon 137mm and the more recent H-profile 
                     for larger totems (up to 6 meters). </p>
                </div>
                

                     <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-1.57.37-PM-2.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-1.57.37-PM-1.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-1.57.37-PM.jpeg" alt='slide-image' className="slide-image" />
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

export default Totem;            