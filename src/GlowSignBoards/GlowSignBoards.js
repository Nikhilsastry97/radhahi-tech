import React, {Component} from 'react';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SocialMedia from "../SocialMedia/SocialMedia";
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import ContactUsBanner from '../ContactUsBanner/ContactUsBanner';
import Footer from '../Footer/Footer';
import Copyright from '../CopyrightSection/Copyright';

import './GlowSignBoards.css';


class GlowSignBoards extends Component { 
    render() {

        const galleryImages = [
            "https://radhahitech.com/wp-content/uploads/2025/05/d.jpg",
            "https://radhahitech.com/wp-content/uploads/2025/05/e.jpg",
            "https://radhahitech.com/wp-content/uploads/2025/05/f.jpg",
            "https://radhahitech.com/wp-content/uploads/2025/08/a1-2048x1151.jpg",
            "https://radhahitech.com/wp-content/uploads/2025/08/a2-2048x1151.jpg",
            "https://radhahitech.com/wp-content/uploads/2025/08/a3-scaled.jpg",
            "https://radhahitech.com/wp-content/uploads/2025/08/only-for-open-1024x534.jpg"
        ];


        return (
            <>
            <Header />
            <Navbar />

            <div className="glow-sign-boards-container">
                <img src="https://radhahitech.com/wp-content/uploads/2025/02/led-sign-board-1.jpg" 
                alt="glow-sign-boards" className='glow-sign-boards' />
                 <SocialMedia title="glow-sign-boards" />

                <div className='glow-sign-boards-section'>
                <h1 className='glow-sign-boards-heading'>Illuminate Your Brand with Impact</h1>
                <p className='glow-sign-boards-paragraph'> At Radha Hi-Tech Print Solutions, we specialize in 
                    designing and manufacturing high-quality LED Signages that enhance your brand's 
                    visibility, day and night. Our LED signage solutions are energy-efficient, 
                    long-lasting, and customizable to suit various business needs. Whether you 
                    need an eye-catching storefront display, interior branding, or large-scale 
                    outdoor advertising, our LED signs ensure maximum impact. </p>
                    <h1 className='glow-sign-boards-heading'>Our LED Signage Solutions</h1>
                <h3 className='glow-sign-boards-heading'>LED Sign Boards</h3>
                <p className='glow-sign-boards-paragraph'> Bright, vibrant, and customized to suit your
                     brand, our LED sign boards are ideal for storefronts, offices, and commercial 
                     spaces. These boards are available in various styles, including backlit, 
                     front-lit, and edge-lit options.</p>
                     <h3 className='led-signages-sub-heading'>Glow Sign Boards</h3>
                <p className='led-signages-paragraph'> Enhance your business visibility with 
                    illuminated glow sign boards. Designed to be weather-resistant and 
                    long-lasting, these signages offer excellent brand exposure, 
                    day and night.</p>
                     <h3 className='led-signages-sub-heading'>Digital LED Display Boards</h3>
                <p className='led-signages-paragraph'> Take advertising to the next level 
                    with high-resolution digital LED display boards. These screens allow 
                    for dynamic content, animations, and videos, making them perfect for
                     retail outlets, malls, and corporate promotions.</p>
                     <h3 className='led-signages-sub-heading'>Acrylic LED Sign Boards</h3>
                <p className='led-signages-paragraph'> Made with high-quality acrylic materials,
                     these signboards provide a sleek and modern look while offering superior 
                     brightness and visibility. Perfect for luxury brands, salons, 
                     boutiques, and offices.</p>
                     <h3 className='led-signages-sub-heading'> Neon LED Signages </h3>
                <p className='led-signages-paragraph'> Want a trendy and stylish 
                    signage option? Our neon LED signages offer a retro yet 
                    modern appeal, perfect for cafes, bars, restaurants, 
                    and creative workspaces. </p>

                  <WhyChooseUs/>
                </div>
                        
                        <ContactUsBanner />

                    <div className="led-signages-gallery">
                        {galleryImages.map((img, index) => (
                            <div key={index} className="gallery-item">
                                <img src={img} alt={`LED Signage ${index + 1}`} />
                            </div>
                        ))}
                    </div>

                </div>
           
            
                <Footer/>
                <Copyright/>
            </>
        );
    }   
}
export default GlowSignBoards;            