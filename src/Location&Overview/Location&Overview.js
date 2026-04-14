import React, {Component} from 'react';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from '../Footer/Footer';
import Copyright from '../CopyrightSection/Copyright';

import './Location&Overview.css';


class LocationOverview extends Component {
    render() {
        return (
            <>
            <Header />
            <Navbar />
            <div className="location-overview-container">
                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-11.51.57-AM.jpeg" 
                alt="location-overview" className='location-overview-image' />
                 <SocialMedia title="Location & Overview" />
                <div className='location-overview-section'>
                <div className="overview-card">
                   <h2 className='overview-content'>  Established in the year 2009, Radha Hitech Print Solutions in Nacharam, 
                    Hyderabad is a top player in the category LED Sign Board Manufacturers 
                    in the Hyderabad. This well-known establishment acts as a one-stop 
                    destination servicing customers both local and from other parts of 
                    Hyderabad. Now we are working entire Southern part of India for MNC 
                    Clients. Over the course of its journey, this business has established 
                    a firm foothold in it's industry. The belief that customer satisfaction 
                    is as important as their products and services, have helped this 
                    establishment garner a vast base of customers, which continues to 
                    grow by the day. This business employs individuals that are dedicated 
                    towards their respective roles and put in a lot of effort to achieve 
                    the common vision and larger goals of the company. In the near future, 
                    this business aims to expand its line of products and services and cater 
                    to a larger client base. In Hyderabad, this establishment occupies a 
                    prominent location in Nacharam. It is an effortless task in commuting 
                    to this establishment as there are various modes of transport readily 
                    available. It is at Door No. 9/135 Street No 5, Hmt Nagar,, which makes 
                    it easy for first-time visitors in locating this establishment. It is known 
                    to provide top service in the following categories: Sign Board Manufacturers, 
                    LED Sign Board Dealers, LED Sign Board Manufacturers, LED Display Board
                    Dealers, LED Display Board Manufacturers, Digital Sign Board Manufacturers, 
                    Advertising Glow Sign Board, LED Signage Dealers. </h2>
                    <img
                    src="https://radhahitech.com/wp-content/uploads/2025/03/Screenshot-2025-03-03-152213.png"
                    alt="building"
                    className="overview-image"
                    />
                    
                </div>
                </div>
            </div>
                <div className="map-container">
                <iframe title="location-map" src="https://www.google.com/maps?q=17.4215,78.5488&z=15&output=embed"
                    width="100%" height="400" style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"></iframe>
                </div>
            <Footer />
            <Copyright />
            </> 
        );
    }
}

export default LocationOverview;