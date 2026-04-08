import React, {Component} from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from '../Footer/Footer';
import Copyright from '../CopyrightSection/Copyright';

import './ResidentialRealEstate.css';


class ResidentialRealEstate extends Component { 
    render() {
        return (
            <>
            <Header />
            <Navbar />

            <div className="residential-real-estate-container">
                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-3.05.29-PM.jpeg" 
                alt="residential-real-estate" className='residential-real-estate-image' />
                 <SocialMedia title="Residential Real Estate" />

                <div className='residential-real-estate-section'>
                    
                <p className='residential-real-estate-paragraph'> In an era of plush residential properties and schemes, 
                    builders are working hard to build a unique value proposition to attract their customers.
                     Every residential property has its unique appeal that attracts the buyers. 
                     Every housing scheme today is equipped with modern and fancy amenities for families and kids. 
                     In such a scenario what can realters do to make their residential property look exquisite? </p>
                <p className='residential-real-estate-paragraph'> Residential signage can make the property stand out in the crowd. </p>
                     <p className='residential-real-estate-paragraph'> More often than not, builders underestimate
                         the importance of having residential signage in place. Having adequate signage placed at 
                         the right strategic locations can help in making it easier to live for the residents of 
                         the property.
                     </p>
                </div>
                <img src="https://radhahitech.com/wp-content/uploads/2025/02/20240613_202114-1-2048x922.jpg"
                alt="residential-real-estate" className='residential-real-estate-footer-image' />
                </div>
           
            
                <Footer/>
                <Copyright/>
            </>
        );
    }   
}
export default ResidentialRealEstate;            