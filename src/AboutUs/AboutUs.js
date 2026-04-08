import React, {Component} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from "../Footer/Footer";
import Copyright from "../CopyrightSection/Copyright";

import './AboutUs.css';

class AboutUs extends Component {
    render() {

          const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
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
            <div className="about-us-container">
                <img src="https://radhahitech.com/wp-content/uploads/2025/02/20230329_121941-scaled.jpg" 
                alt="about-us" className='about-us-image' />
                 <SocialMedia title="About Us" />
                <div className='about-us-section'>
                    <h1>About Us</h1>
                    <p>In the ever-evolving world of business, leading print 
                        solutions providers play a crucial role in delivering 
                        high-quality and visually appealing designs for a variety of 
                        industries. For multinational corporations (MNCs), hospitals, 
                        banks, schools, event organizers, retail marketers, and daily 
                        activity promoters, having access to top-notch print solutions 
                        is essential for maintaining a professional image and engaging 
                        their audiences. These providers offer innovative and eye-catching 
                        designs tailored to each industry’s specific needs, ensuring that 
                        their clients stand out in a competitive market while adhering to 
                        the highest standards of quality. Whether for marketing materials, 
                        event promotions, or daily operations, these print solutions are key 
                        to building brand recognition and driving success.</p>
                    <p> We offer a comprehensive range of sign solutions, 
                        including parking, entry/exit way finding signboards, 
                        and essential fire exit and safety signage. With our expertise, 
                        we serve as your single-point solution for all internal and external 
                        signage needs, ensuring safety and clear direction for any environment.</p>
                    <h1> Introducing Our Team at Radha Hi-Tech - A Leading Print Solutions Provider </h1>
                    <p>At Radha Hi-Tech, we pride ourselves on being a cutting-edge print 
                        solutions unit equipped with our own state-of-the-art machinery. 
                        Our success is driven by a dedicated and highly skilled team, 
                        committed to delivering top-notch services that exceed customer 
                        expectations. </p>

                    <h2>Management Team</h2>
                    <p>Our experienced managerial staff ensures smooth operations, 
                        effective decision-making, and strategic growth. With years 
                        of industry expertise, they oversee every aspect of our 
                        production process to guarantee quality and efficiency.</p>
                    <h2>Designers</h2>
                    <p>Our creative designers bring innovative concepts to life. 
                        Their expertise in design software, attention to detail, 
                        and deep understanding of client needs ensure visually 
                        stunning results that stand out</p>
                    <h2>Fabricators</h2>
                    <p>Our skilled fabricators possess a mastery of machinery 
                        and materials, crafting high-quality print solutions 
                        with precision. Their technical prowess and hands-on 
                        experience ensure every product is durable, reliable,
                        and of the highest quality.</p>
                    <h2>Applicators</h2>
                    <p>The applicators on our team are meticulous in 
                        their work, ensuring that every print is applied 
                        seamlessly, with exceptional attention to detail 
                        and accuracy.</p>
                    <h2>Skilled Sub-Staff:</h2>
                    <p>Our sub-staff are an integral part of our operations, 
                        contributing their expertise and support in various 
                        areas to ensure smooth execution of every project. 
                        Their hard work and dedication are vital to achieving 
                        the level of customer satisfaction we are known for.</p>
                    <p>At Radha Hi-Tech, customer satisfaction is our top 
                        priority, and our expert team works tirelessly to 
                        ensure we meet and exceed expectations. With a 
                        combination of advanced technology and skilled 
                        professionals, we guarantee superior results
                        every time</p>
                </div>
                <h1>Our Team</h1>
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
                                </Slider>
                                    </div>
            </div>
            <Footer />
            <Copyright />
            </>
        );
    }
}

export default AboutUs;