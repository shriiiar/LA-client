import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div class="footer-dark">
            <footer id='footer'>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#">My Items</a></li>
                                <li><a href="#">Add Items</a></li>
                                <li><a href="#">Inventory</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">About</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 item text">
                            <h3>LA Customs</h3>
                            <p>From imported cars to custom we got your back. A mordern car inventory with world class Auto Pilot System. Give your car the intelligence it needs. PEACE</p>
                        </div>
                    </div>
                    <p class="copyright">LA Customs © 2022</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;