import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import vid from '../../../vid/Elite - Car Showroom Promo.mp4';
import InvididualItems from '../Invididual Items/InvididualItems';
import GetData from '../../../Hooks/GetData';

const Home = () => {
    const [car, setCar] = GetData();
    let fromHome = 1;

    console.log(car);
    return (
        <div>
            <section className='container carousel'>
                <Carousel>
                    <Carousel.Item>
                        <video class="mt-3" src={vid}
                            autoPlay loop muted></video>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid"
                            src='https://i.ibb.co/HYgw8dS/pexels-alex-amorales-909907.jpg'
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid"
                            src='https://i.ibb.co/CtWSqwr/img1.jpg'
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid"
                            src='https://i.ibb.co/MpM413N/img3.jpg'
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid"
                            src='https://i.ibb.co/3B2wsPM/img6.jpg'
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                {
                    car.slice(0, 6).map(items => <InvididualItems key={items._id} items={items} fromHome={fromHome}></InvididualItems>)
                }
            </div>
        </div>
    );
};

export default Home;