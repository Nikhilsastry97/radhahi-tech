import React, {Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from '../Footer/Footer';
import Copyright from '../CopyrightSection/Copyright';

import './SignFlexLite.css';


class SignFlexLite extends Component { 
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

            <div className="sign-flex-lite-container">
                <img src="https://radhahitech.com/wp-content/uploads/2025/02/20240615_203205-scaled.jpg" 
                alt="sign-flex-lite" className='sign-flex-lite-image' />
                 <SocialMedia title="I-Sign Flex Lite" />

                <div className='sign-flex-lite-section'>
                    <h1 className='sign-flex-lite-heading'> A Sleek and Versatile Changeable Sign System </h1>
                <p className='sign-flex-lite-paragraph'> I-Sign Flex Lite is a dynamic signage solution 
                    featuring a few unique characteristics: a flat design with a minimal 2.5mm 
                    visible rim and an interchangeable media system 
                    for ultimate flexibility.</p>
                <p className='sign-flex-lite-paragraph'>Building on the legacy of 
                    sleek design, I-Sign Flex Lite enhances profiles with a 
                    modern, refined look. </p>
                     <p className='sign-flex-lite-paragraph'> Its lightweight construction 
                        ensures ease of use, making it a practical and 
                        stylish choice for various applications.
                     </p>
                </div>
                

                     <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/02/20220729_175052-scaled.jpg" alt='slide-image' className="slide-image" />
                            </div>
                           
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/02/20220729_175042-scaled.jpg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/02/20200915_124544-scaled.jpg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/02/20200923_204010-2-scaled.jpg" alt='slide-image' className="slide-image" />
                            </div>
                             <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/02/fbgf.png" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/02/20220914_195847-scaled.jpg" alt='slide-image' className="slide-image" />
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
export default SignFlexLite;            