import React, {Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from '../Footer/Footer';
import Copyright from '../CopyrightSection/Copyright';

import './IndustrySignages.css';


class IndustrySignages extends Component { 
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

            <div className="industry-signages-container">
                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-5.20.18-PM-5.jpeg" 
                alt="industry-signages" className='industry-signages-image' />
                 <SocialMedia title="Industry Signages" />

                <div className='industry-signages-section'>
                <p className='industry-signages-paragraph'>Gone are the days when factories or industrial areas 
                    used to look vast but unappealing. Today, companies want their factories and warehouses 
                    to communicate the right brand image and vibrancy. </p>
                <p className='industry-signages-paragraph'> Industrial areas are typically vast and complex.
                     In such areas, good wayfinding and directional signage systems are necessary to guide 
                     visitors to their destinations. That apart, the industrial areas also need to ensure 
                     the safety of the employees as well as visitors. Safety signs that not only meet the 
                     safety and compliance standards but also create a ‘wow’ factor are necessary for these 
                     environments. </p>
                     <p className='industry-signages-paragraph'> By using the right signage in the industrial 
                        areas, companies can establish a strong company brand, create a welcoming feel to the 
                        visitors, and also ensure the safety of the employees at work and the visitors.
                     </p>
                     <p className='industry-signages-paragraph'> Since most of the signage are installed in the 
                        outside areas, companies need to ensure that they select the right systems which are 
                        sturdy, easy to install, easily maintainable, and can withstand the extreme weather 
                        conditions.</p>
                </div>
                

                     <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-5.20.18-PM-4.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-5.20.18-PM-3.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-5.20.18-PM-2.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-5.20.18-PM-1.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-5.20.18-PM.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-5.20.17-PM.jpeg" alt='slide-image' className="slide-image" />
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
export default IndustrySignages;            