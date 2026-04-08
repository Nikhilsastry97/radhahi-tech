import React, {Component} from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className='logo-container'>
                     <img src="https://radhahitech.com/wp-content/uploads/2022/03/ytrewq.png" alt="company-logo" 
                        className='navbar-logo' />
                </div>
                    <ul className='nav-menu'>
                        <li className='dropdown'> Architectural Signage <MdKeyboardArrowDown />
                        <ul className="dropdown-menu">
                            <li  className="submenu">Modular Sign System <MdKeyboardArrowRight />
                                <ul className="submenu-menu">
                                <li>Module Plus Indoor</li>
                                <li>Module Plus Outdoor</li>
                            </ul>
                            </li>
                            <li className="submenu">Flexible Sign Systems <MdKeyboardArrowRight />
                             <ul className="submenu-menu">
                                <li>I-Sign Fix</li>
                                <li>I-Sign Display</li>
                                <li>I-Sign Flex Lite</li>
                                <li>Strato</li>
                            </ul>
                            </li>
                            <li className="submenu">Pylon <MdKeyboardArrowRight />
                            <ul className="submenu-menu">
                                <li>Modular Pylon</li>
                                <li>Totem </li>
                                </ul>
                            </li>
                            <li>Illuminated Exit Signs</li>
                            <li>Light Box</li>
                            </ul></li>
                        <li className="dropdown"> Display Products <MdKeyboardArrowDown />
                            <ul className="dropdown-menu">
                            <li>Opti Frame</li>
                            <li>Fabric Frame</li>
                            <li>Art Frame</li>
                            <li>Led Thinlite</li>
                            </ul>
                        </li>
                        <li className='dropdown'>Industries <MdKeyboardArrowDown />
                        <ul className="dropdown-menu">
                            <li>Hospital</li>
                            <li>Education</li>
                            <li>Coorporate Offices</li>
                            <li>Industry Signages</li>
                            <li>Banking</li>
                            <li>Public Infrastructure</li>
                            <li>Residential-real-estate</li>
                            <li>Retail</li>
                            </ul> </li>
                        <li className='dropdown'>Our Services <MdKeyboardArrowDown />
                         <ul className="dropdown-menu">
                        <li>LED Signages</li> 
                        <li>Glow Sign Boards</li> 
                        <li>Eco Solvent Printing</li> 
                        <li>One way Vision Front <br/>Lit & Back Lit</li> 
                        <li>Brouchers</li> 
                        <li>Letterheads</li> 
                        <li>Multi-Color Printing</li> 
                        <li>Vinyl Printing</li> 
                        <li>Visiting Cards</li> 
                         </ul>
                        
                        </li>
                        <li className='dropdown'>Gallery </li>
                    </ul>
                <button className='download-button'>Download</button>
            </div>
        );
    }      
}

export default Navbar;