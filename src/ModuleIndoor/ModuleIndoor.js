import React, {Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from '../Footer/Footer';
import Copyright from '../CopyrightSection/Copyright';

import './ModuleIndoor.css';


class ModuleIndoor extends Component { 
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

            <div className="module-indoor-container">
                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-11.51.57-AM.jpeg" 
                alt="module-indoor" className='module-indoor-image' />
                 <SocialMedia title="Module Plus Indoor" />

                <div className='module-indoor-section'>
                    <h1 className='module-indoor-heading'> A Timeless Product That Delivers Excellence Every Time! </h1>
                <p className='module-indoor-paragraph'> With the Module Plus Indoor, Radha Hi-Tech Print 
                    Solutions developed a modular sign system in the early 1990s that revolutionized 
                    architectural signage and set a new industry trend, inspiring many professionals 
                    in the field. </p>
                <p className='module-indoor-paragraph'>The Module Plus Indoor features a series 
                    of flat aluminum profiles in various widths, with 15.5 mm and 31 mm modules 
                    serving as the basic profiles. These profiles can be effortlessly “clicked” 
                    into place using plastic end caps or clips, allowing for the creation of door 
                    signs, pictograms, directories, and more. The system supports both single-sided
                    wall-mounted signs and double-sided configurations for hanging or flag mounting. </p>
                     <p className='module-indoor-paragraph'> Beyond providing a simple, versatile,
                         and flexible standard solution, the Module Plus Indoor platform empowers 
                         creative sign makers to add their own unique touch and develop customized 
                         products.
                     </p>
                </div>
                

                     <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-12.05.27-PM.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-12.07.25-PM.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-12.10.08-PM.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                             <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-12.13.08-PM.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-12.14.56-PM.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-12.28.15-PM.jpeg" alt='slide-image' className="slide-image" />
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
export default ModuleIndoor;            