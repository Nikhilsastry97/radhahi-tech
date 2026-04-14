import React, {Component} from 'react'
import { FaDiamond } from "react-icons/fa6";

import './WhyChooseUs.css'

class WhyChooseUs extends Component {
        render() {

            const features = [
            "15+ Years of Industry Experience",
            "Customized LED Signages - We design signage that aligns with your brand identity.",
            "Premium Quality Materials - Ensuring long-lasting durability and weather resistance.",
            "Innovative & Modern Designs - We use advanced technology to create eye-catching LED signboards.",
            "Professional Installation Services - Our expert team ensures safe and perfect installation.",
            "Affordable Pricing - Competitive rates without compromising on quality."
        ];
            return(
                <div>
                    <h1 className="led-signages-heading"> Why Choose Radha Hi-Tech Print Solutions?</h1>
                        <ul className="why-choose-list">
                         {features.map((feature, index) => (
                        <li key={index} className="why-choose-item">
                        <FaDiamond className="diamond-icon" />
                       <span>{feature}</span>
                 </li>
                ))}
                </ul>

                </div>
         
            )

        }
}

export default WhyChooseUs