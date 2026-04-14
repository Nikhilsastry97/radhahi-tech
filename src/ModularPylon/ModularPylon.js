import React, {Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from '../Footer/Footer';
import Copyright from '../CopyrightSection/Copyright';

import './ModularPylon.css';


class ModularPylon extends Component { 
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

            <div className="modular-pylon-container">
                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-1.59.02-PM-1.jpeg" 
                alt="modular-pylon" className='modular-pylon-image' />
                 <SocialMedia title="Modular Pylon" />

                <div className='modular-pylon-section'>
                    <h1 className='modular-pylon-heading'> A Smart and Customizable Signage System </h1>
                <p className='modular-pylon-paragraph'> The Modular Totem is an innovative profile 
                    system designed for versatility and strength. It consists of a basic 
                    profile and three decorative cover profiles—rectangular, elliptical, 
                    and rounded—mounted onto a sturdy frame. </p>
                <p className='modular-pylon-paragraph'>This system offers complete customization, 
                    allowing users to determine the depth (10cm, 15cm, or 20cm), 
                    material (aluminum or steel), size, and wall thickness of the interior 
                    structure. As a result, robust totems up to 6 meters high can 
                    be constructed with ease. </p>
                     <p className='modular-pylon-paragraph'> For a seamless appearance, 
                        profiles and panels are secured with hidden screws. Maintenance and 
                        updates are simple, as the panels can be effortlessly lifted out 
                        and replaced when needed.
                     </p>
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
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-1.57.36-PM-1.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-1.57.36-PM.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-3.56.12-PM.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                        </Slider>
                    </div>
                     <img src="https://radhahitech.com/wp-content/uploads/2025/08/a3-934x1536.jpg" alt="modular-pylon" className='modular-pylon-sub-image' />
                </div>
           
            
                <Footer/>
                <Copyright/>
            </>
        );
    }   
}
export default ModularPylon;            