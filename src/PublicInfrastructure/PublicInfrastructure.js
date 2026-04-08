import React, {Component} from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from '../Footer/Footer';
import Copyright from '../CopyrightSection/Copyright';

import './PublicInfrastructure.css';


class PublicInfrastructure extends Component { 
    render() {
        return (
            <>
            <Header />
            <Navbar />

            <div className="public-infrastructure-container">
                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-3.05.29-PM.jpeg" 
                alt="public-infrastructure" className='public-infrastructure-image' />
                 <SocialMedia title="Public Infrastructure" />

                <div className='public-infrastructure-section'>
                    
                <p className='public-infrastructure-paragraph'> In our hyper-connected world of today, 
                    everyone seems to be in a colossal hurry to get somewhere, especially in the 
                    metropolitan cities. Moreover, as cities get smarter, the need for smarter 
                    signage is growing rapidly. </p>
                <p className='public-infrastructure-paragraph'> Without signage, the transport hubs 
                    would collapse into confusion, travelers would collide with each other causing 
                    further chaos, and everything will grind to a halt. This is why the right signage 
                    systems are so crucial in transport hubs! </p>
                     <p className='public-infrastructure-paragraph'> Signage provide access to crucial 
                        information in real time for even the first-time visitors. Way-finding signage 
                        help passengers understand their position in the public transportation hub, get 
                        directions to various useful destinations, and know about leisure areas, parking, 
                        etc. Getting the right information in an unfamiliar place like airports or rail 
                        stations helps in creating an excellent experience for the passengers and reduces 
                        their frustrations. Maps, arrows, and guidelines placed at the appropriate places 
                        ensure that the passengers can understand crucial instructions.
                     </p>
                </div>
                <img src="https://radhahitech.com/wp-content/uploads/2025/02/20220524_201147-1-1-2048x922.jpg"
                alt="public-infrastructure" className='public-infrastructure-footer-image' />
                </div>
           
            
                <Footer/>
                <Copyright/>
            </>
        );
    }   
}
export default PublicInfrastructure;            