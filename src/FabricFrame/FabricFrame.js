import React, {Component} from 'react';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from '../Footer/Footer';
import Copyright from '../CopyrightSection/Copyright';

import './FabricFrame.css';


class FabricFrame extends Component { 
    render() {

        const galleryImages = [
            "https://radhahitech.com/wp-content/uploads/2025/05/a-1.jpg",
            "https://radhahitech.com/wp-content/uploads/2025/05/4.jpg",
            "https://radhahitech.com/wp-content/uploads/2025/05/3.jpg",
            "https://radhahitech.com/wp-content/uploads/2025/05/1.jpg",
            "https://radhahitech.com/wp-content/uploads/2025/05/2.jpg",
        ];

        return (
            <>
            <Header />
            <Navbar />

            <div className="fabric-frame-container">
                <img src="https://radhahitech.com/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-22-at-3.05.29-PM.jpeg" 
                alt="fabric-frame" className='fabric-frame-image' />
                 <SocialMedia title="Fabric Frame" />

                <div className='fabric-frame-section'>
                <p className='fabric-frame-paragraph'>Fabric frames are the solution for the fast and easy 
                    exchange of printed textile fabrics. The image is printed on a textile fabric and a 
                    silicon beading is added around it. This is simply pressed into the profile that 
                    ensures that the slightly stretchable fabric can be stretched perfectly. </p>
                <p className='fabric-frame-paragraph'> The convenience of use of our aluminium profiles 
                    in combination with innovative accessories and high-quality textile fabrics that 
                    can be printed up to 5 m wide seamlessly means that our fabric frames are perfectly 
                    suitable for dressing and setting up shops, showrooms, offices and fair stands. 
                    Regardless of whether you want a wall frame or a standalone or hanging frame, you
                     will find the right solution with our single- and 
                     double-sided textile profiles. </p>
                     <p className='fabric-frame-paragraph'> Radha Hi-Tech also offers LED profiles 
                        in which you can integrate High Power LED modules that will ensure that the 
                        fabric is lit up uniformly and the image is done even better justice. You 
                        can also include a noise-dampening material behind the printed fabric to 
                        improve the acoustics of a room or to create partitions. You will not just 
                        find the profiles and accessories at Radha Hi-Tech, you can also order the 
                        full custom-made product including the printed fabric.
                     </p>
                </div>

                    <div className="fabric-frame-gallery">
                        {galleryImages.map((img, index) => (
                            <div key={index} className="gallery-item">
                                <img src={img} alt={`Fabric Frame ${index + 1}`} />
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
export default FabricFrame;            