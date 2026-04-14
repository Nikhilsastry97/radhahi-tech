import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
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
                    {/* Architectural Signage */}
                    <li className='dropdown'>
                        <span className="nav-link">
                            Architectural Signage <MdKeyboardArrowDown />
                        </span>
                        <ul className="dropdown-menu">
                            <li className="submenu">
                                <span className="submenu-title">
                                    Modular Sign System <MdKeyboardArrowRight />
                                </span>
                                <ul className="submenu-menu">
                                    <li>
                                        <NavLink to="/module-plus-indoor">Module Plus Indoor</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/module-plus-outdoor">Module Plus Outdoor</NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="submenu">
                                <span className="submenu-title">
                                    Flexible Sign Systems <MdKeyboardArrowRight />
                                </span>
                                <ul className="submenu-menu">
                                    <li><NavLink to="/i-sign-fix">I-Sign Fix</NavLink></li>
                                    <li><NavLink to="/i-sign-display">I-Sign Display</NavLink></li>
                                    <li><NavLink to="/i-sign-flex-lite">I-Sign Flex Lite</NavLink></li>
                                    <li><NavLink to="/strato">Strato</NavLink></li>
                                </ul>
                            </li>

                            <li className="submenu">
                                <span className="submenu-title">
                                    Pylon <MdKeyboardArrowRight />
                                </span>
                                <ul className="submenu-menu">
                                    <li><NavLink to="/modular-pylon">Modular Pylon</NavLink></li>
                                    <li><NavLink to="/totem">Totem</NavLink></li>
                                </ul>
                            </li>

                            <li><NavLink to="/illuminated-exit-signs">Illuminated Exit Signs</NavLink></li>
                            <li><NavLink to="/light-box">Light Box</NavLink></li>
                        </ul>
                    </li>

                    {/* Display Products */}
                    <li className="dropdown">
                        <span className="nav-link">
                            Display Products <MdKeyboardArrowDown />
                        </span>
                        <ul className="dropdown-menu">
                            <li><NavLink to="/opti-frame">Opti Frame</NavLink></li>
                            <li><NavLink to="/fabric-frame">Fabric Frame</NavLink></li>
                            <li><NavLink to="/art-frame">Art Frame</NavLink></li>
                            <li><NavLink to="/led-thinlite">Led Thinlite</NavLink></li>
                        </ul>
                    </li>

                    {/* Industries */}
                    <li className='dropdown'>
                        <span className="nav-link">
                            Industries <MdKeyboardArrowDown />
                        </span>
                        <ul className="dropdown-menu">
                            <li><NavLink to="/hospital">Hospital</NavLink></li>
                            <li><NavLink to="/education">Education</NavLink></li>
                            <li><NavLink to="/corporate-offices">Corporate Offices</NavLink></li>
                            <li><NavLink to="/industry-signages">Industry Signages</NavLink></li>
                            <li><NavLink to="/banking">Banking</NavLink></li>
                            <li><NavLink to="/public-infrastructure">Public Infrastructure</NavLink></li>
                            <li><NavLink to="/residential-real-estate">Residential Real Estate</NavLink></li>
                            <li><NavLink to="/retail">Retail</NavLink></li>
                        </ul>
                    </li>

                    {/* Our Services */}
                    <li className='dropdown'>
                        <span className="nav-link">
                            Our Services <MdKeyboardArrowDown />
                        </span>
                        <ul className="dropdown-menu">
                            <li><NavLink to="/led-signages">LED Signages</NavLink></li>
                            <li><NavLink to="/glow-sign-boards">Glow Sign Boards</NavLink></li>
                            <li><NavLink to="/eco-solvent-printing">Eco Solvent Printing</NavLink></li>
                            <li>
                                <NavLink to="/one-way-vision-front">
                                    One Way Vision Front Lit & Back Lit
                                </NavLink>
                            </li>
                            <li><NavLink to="/brouchers">Brouchers</NavLink></li>
                            <li><NavLink to="/letterheads">Letterheads</NavLink></li>
                            <li><NavLink to="/multi-color-printing">Multi-Color Printing</NavLink></li>
                            <li><NavLink to="/vinyl-printing">Vinyl Printing</NavLink></li>
                            <li><NavLink to="/visiting-cards">Visiting Cards</NavLink></li>
                        </ul>
                    </li>

                    {/* Gallery */}
                    <li>
                        <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
                    </li>
                </ul>
                <button className='download-button'>Download</button>
            </div>
        );
    }      
}

export default Navbar;