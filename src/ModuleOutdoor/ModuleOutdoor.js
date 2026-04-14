import React, {Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from '../Footer/Footer';
import Copyright from '../CopyrightSection/Copyright';

import './ModuleOutdoor.css';


class ModuleOutdoor extends Component { 
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

            <div className="module-outdoor-container">
                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-11.57.56-AM.jpeg" 
                alt="module-outdoor" className='module-outdoor-image' />
                 <SocialMedia title="Module Plus Outdoor" />

                <div className='module-outdoor-section'>
                    <h1 className='module-outdoor-heading'> Elegant and Versatile Outdoor Signage! </h1>
                <p className='module-outdoor-paragraph'>With Module Plus Outdoor, Radha Hi-Tech 
                    Print Solutions has developed a modular system for outdoor signage 
                    that is highly recommended by architects and designers worldwide. 
                    Signmakers appreciate its versatility, convenience, and the ability 
                    to create unique, custom-made signs tailored to specific needs. </p>
                <p className='module-outdoor-paragraph'> Module Plus Outdoor provides the
                     perfect solution for identifying buildings or locations, conveying messages,
                      and guiding people to the right place—whether it’s an industrial estate,
                       corporate or office building, hospital, school, shopping center, or 
                       parking facility. Well-designed outdoor signage also plays a crucial 
                       role in reinforcing a company’s corporate identity. </p>
                     <p className='module-outdoor-paragraph'> The Module Plus Outdoor system 
                        includes a range of round and square-shaped aluminum poles and text 
                        panels (box profiles) with a height of 46mm, designed to accommodate 
                        aluminum composite panels. These text panels are secured using 
                        specialized panel clamps. Additionally, the poles can be combined
                         with the I Sign Display Double Side system to create custom-lit 
                         or non-lit signs.
                     </p>
                </div>
                

                     <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-12.43.21-PM.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-12.47.32-PM.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-12.47.32-PM-1.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-12.47.33-PM.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-12.43.20-PM.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                        </Slider>
                    </div>

                    <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-12.47.33-PM-1.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-12.50.26-PM.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-12.43.21-PM-2.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-12.43.21-PM-1.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-12.53.22-PM-2.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-12.53.22-PM-1.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-12.53.22-PM.jpeg" alt='slide-image' className="slide-image" />
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
export default ModuleOutdoor;            