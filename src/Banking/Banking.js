import React, {Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from '../Footer/Footer';
import Copyright from '../CopyrightSection/Copyright';

import './Banking.css';


class Banking extends Component { 
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

            <div className="banking-container">
                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-5.50.44-PM-2.jpeg" 
                alt="banking" className='banking-image' />
                 <SocialMedia title="Banking" />

                <div className='banking-section'>
                <p className='banking-paragraph'>The banking sector has seen a paradigm shift in the 
                    past couple of decades. Banking is no longer a tedious task that people used to dread.
                     The evolution of banking services has paved the way for newer avenues to reach out to 
                     and attract potential customers. For any industry, customer experience plays a vital 
                     role in ensuring customer loyalty. The highly regulated banking industry 
                     is no exception to that. </p>
                <p className='banking-paragraph'>What can the banks do to build relationships 
                    with their customers, increase customer satisfaction and increase customer 
                    loyalty? Well, the answer lies in having the right signage to help their 
                    customers when they visit the branches. </p>
                     <p className='banking-paragraph'> Effectively designed signage can create
                         a welcoming and engaging experience for the customers in every branch 
                         of the bank. Signage can be used to promote communication and customer 
                         engagement. Signage in banks and other financial institutions is not 
                         used only for imparting information or educating the customers about 
                         their products and services but also for making it easier for the 
                         customers to access the facilities offered by the bank.
                     </p>
                </div>
                

                     <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-5.50.43-PM-5.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-5.50.43-PM-4.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-5.50.43-PM-3.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-5.50.43-PM-2.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-5.50.43-PM-1.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-5.50.43-PM.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                        </Slider>
                    </div>

                    <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-5.50.44-PM-1.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-5.50.44-PM.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-5.50.43-PM-10.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-5.50.43-PM-9.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-5.50.43-PM-8.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-5.50.43-PM-7.jpeg" alt='slide-image' className="slide-image" />
                            </div>
                            <div>
                                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-5.50.43-PM-6.jpeg" alt='slide-image' className="slide-image" />
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
export default Banking;            