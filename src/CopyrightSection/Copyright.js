import React, {Component} from 'react';
import { FaRegCopyright } from "react-icons/fa";
import './Copyright.css';

class Copyright extends Component {
    render() {
        return ( 
            <div className="copyright">
                 <FaRegCopyright className="copyright-icon" />
                <p className="copyright-text">2025 Radha Hi-Tech Solutions. All Rights Reserved.</p>
            </div>
        );
    }
}

export default Copyright;