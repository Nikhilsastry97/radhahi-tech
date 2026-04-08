import React, {Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from '../Footer/Footer';
import Copyright from '../CopyrightSection/Copyright';

import './Education.css';


class Education extends Component { 
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

            <div className="education-container">
                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-4.32.44-PM.jpeg" 
                alt="education" className='education-image' />
                 <SocialMedia title="Education" />

                <div className='education-section'>
                <p className='education-paragraph'> Signage systems in educational establishments are used for </p>
                <p className='education-paragraph'>1. Providing directions across the campus <br/>
                2. Making big and important announcements <br/>
                3. As a replacement to regular notice boards <br/>
                4. Providing safety guidelines <br/>
                 </p>
                     <p className='education-paragraph'> For educational institutions, 
                        the signage systems serve a dual purpose - firstly, they create 
                        a sense of safety and comfort the students, and secondly, they 
                        help in the educational institute in conveying its values and beliefs.
                     </p>
                     <p className='education-paragraph'> Many educational institutions are 
                        turning to attractive signage to attract and hold their students' 
                        attention to important announcements, notices, disciplinary and security 
                        guidelines across the campus.</p>
                </div>
                

                     <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-4.32.43-PM-1.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-4.32.43-PM-2.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-4.32.43-PM-3.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-4.32.37-PM-1.jpeg" alt='slide-image' className="slide-image" />
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
export default Education;            