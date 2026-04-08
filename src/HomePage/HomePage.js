import React, {Component} from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Copyright from '../CopyrightSection/Copyright';

import './HomePage.css';


class HomePage extends Component {
    render() {
        return (
            <div className='homepage'>
                <Header />
                <Navbar />
                <Footer/>
                <Copyright/>
                </div>
        );
    }   
}

export default HomePage;