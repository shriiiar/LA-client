import React from 'react';
import './Blogs.css';
import { Carousel } from 'react-bootstrap';
import vid from '../../../vid/Elite - Car Showroom Promo.mp4';
import img1 from '../../../img/img1.jpg';
import img2 from '../../../img/img2.jpg';
import img3 from '../../../img/img3.jpg';
import img4 from '../../../img/img4.jpg';
import img5 from '../../../img/img5.jpg';
import vid1 from '../../../vid/Model S_2.mp4';
import vid2 from '../../../vid/Model S_4.mp4';
import vid3 from '../../../vid/Model S_3.mp4';
import vid5 from '../../../vid/The new BMW 7 Series. Official TV Commercial..mp4';
import vid6 from '../../../vid/Introducing the New Range Rover Velar Plug-In-Hybrid.mp4';
import vid7 from '../../../vid/Aventador SVJ- shaping the future.mp4';

const Blogs = () => {
    return (
        <div className='blog'>
			<h1 className='sec-2-header fs-4 button-1 mb-3'>A mordern car inventory with world classAuto Pilot System
			</h1>
            <section className='container carousel'>
                        <Carousel>
                            <Carousel.Item>
                                <video class="mt-3" src={vid}
                                    autoPlay loop muted></video>
                                <Carousel.Caption>
                                    <h3>LA Customs</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src='https://i.ibb.co/dpw9FZ9/img4.jpg'
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Lamborghini Aventador</h3>
                                    <p>The old classic meets V-13, With 769 Horse Power. Speed is just a piece of cake</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src='https://i.ibb.co/CtWSqwr/img1.jpg'
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>G-Wagen Y</h3>
                                    <p>Two-seated old school car based on the V-12 engine. Standard with a V-12 engine</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src='https://i.ibb.co/MpM413N/img3.jpg'
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Camaro Classic</h3>
                                    <p>A ride towards fun and danger, Alpha-G Horse Power to match rivals</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img-fluid"
                                    src='https://i.ibb.co/3B2wsPM/img6.jpg'
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>BMW E39 M5</h3>
                                    <p>The E39 generation of the M5 is the first M5 to use a V8 engine, resulting in an increase in power output to 294 kW</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </section>
        </div>
    );
};

export default Blogs;