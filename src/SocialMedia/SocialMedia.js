import React from 'react';
import {FaInstagram, FaWhatsapp } from "react-icons/fa";

import './SocialMedia.css';

const SocialMedia = ({title}) => {
    return (
        <div className='social-media-header'>
            <div className='social-media-header-container'>
                <h1 className="page-title">{title}</h1>
                <div className='social-media-icons'>
                    <div className="icon instagram">
                        <FaInstagram />
                    </div>
                    <div className="icon whatsapp">
                        <FaWhatsapp />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialMedia;