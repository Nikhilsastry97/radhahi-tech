import React, {Component} from 'react';

import './ContactUsBanner.css';

class ContactUsBanner extends Component {
    render() {
        return (
            <section className="contact-us-cta">
      <div className="contact-us-cta-overlay">
        <div className="contact-us-cta-content">
          <h2 className="contact-us-cta-title">
            Get Your Custom Contact Us Banner Today!
          </h2>
          <p className="contact-us-cta-description">
            Illuminate your brand with stunning LED signboards from Radha
            Hi-Tech Print Solutions. Contact us today for a free consultation
            and let us help you create the perfect signage solution for your
            business.
          </p>
          <a href="/contact" className="contact-us-cta-button">
            Contact Us
          </a>
        </div>
      </div>
    </section>
        );
    }
}   

export default ContactUsBanner;