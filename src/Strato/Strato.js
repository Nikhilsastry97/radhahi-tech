import React, {Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from '../Footer/Footer';
import Copyright from '../CopyrightSection/Copyright';

import './Strato.css';


class Strato extends Component { 
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

            <div className="strato-container">
                <img src="https://radhahitech.com/wp-content/uploads/2025/02/20240615_203205-scaled.jpg" 
                alt="strato" className='strato-image' />
                 <SocialMedia title="Strato" />

                <div className='strato-section'>

                    <h1 className='strato-heading'> A Modern and Versatile Sign System </h1> 

                <p className='strato-paragraph'> Strato is a contemporary and adaptable signage 
                    solution featuring a series of soft-curved profiles with square sides, 
                    offering a sleek and professional look.</p>
                <p className='strato-paragraph'> Designed for flexibility, it accommodates 
                    paper inlays (in standard DIN formats) placed behind a non-reflective 
                    acrylic cover. Additionally, inserts made of plastic or metal can be used, 
                    or direct signage and printing can be applied to the profiles 
                    for a customized appearance. </p>
                     <p className='strato-paragraph'> For a polished finish, users can select 
                        between plastic or aluminum end caps. The latest additions to the range 
                        include new profiles and end caps, allowing for the creation of wider 
                        directories in 400mm, 500mm, and 600mm formats.
                     </p>
                </div>
                

                     <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/02/20240615_203205-scaled.jpg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/02/20240718_123805-scaled.jpg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/02/20230916_154922-scaled.jpg" alt='slide-image' className="slide-image" />
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
export default Strato;            