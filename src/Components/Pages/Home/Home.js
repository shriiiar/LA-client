import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import vid from '../../../vid/Elite - Car Showroom Promo.mp4';
import InvididualItems from '../Invididual Items/InvididualItems';
import GetData from '../../../Hooks/GetData';
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
import { useNavigate } from 'react-router-dom';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';

const Home = () => {
    const [getData, setGetData] = GetData();
    let fromHome = 1;
    const navigate = useNavigate();
    const goToManageInventory = () => {
        navigate('/manageInventory');
    }
    return (
        <div>
            <HelmetTitle title='Home'></HelmetTitle>
            <div style={{ margin: "150px 0" }} className="row align-items-center">
                <div className="col-lg-7 col-md-12 col-sm-12 order-2 order-sm-2 order-md-2 order-lg-1 text-start ps-5 mt-5">
                    <h1>LA Customs</h1>
                    <p className='fs-3'>From imported cars to custom we got your back. A mordern car inventory with world class <span className='button-2 fs-3'>Auto Pilot System</span> .Give your car the intelliegence it needs. PEACE</p>
                    <button className='button-2'>LA Customs</button>
                </div>
                <div className="col-lg-5 col-md-12 order-1 col-sm-12 order-sm-1 order-md-1 order-lg-2">
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
            </div>
            <div style={{ margin: "150px 0" }}>
                <h1 className='sec-2-header fs-4 button-1'>With Out Best In Class Auto Pilot</h1>
                <div class="vid-grid container">
                    <div class="col-12">
                        <video class="mt-3 w-100" src={vid1} autoPlay loop muted></video>
                    </div>
                    <div class="col-12 row">
                        <div class="col-6">
                            <video class="mt-3 w-100" src={vid2} autoPlay loop muted></video>
                        </div>
                        <div class="col-6">
                            <video class="mt-3 w-100" src={vid3} autoPlay loop muted></video>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className='sec-2-header fs-4 button-1'>Inventory</h1>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                    {
                        getData.slice(0, 6).map(items => <InvididualItems key={items._id} items={items} fromHome={fromHome}></InvididualItems>)
                    }
                </div>
                <button onClick={() => goToManageInventory()} className='button-2 my-5'>Visit Inventory</button>
            </div>
            <div style={{ margin: "100px 0 0 0" }}>
                <h1 className='button-1 w-50 mx-auto my-5'>Glance At Our Inventory</h1>
                <div className='grid-img-div'>
                    <div className="row p-0">
                        <div className="col-lg-6 col-md-12 col-sm-12 p-0 d-flex justify-content-center">
                            <video className="w-75" src={vid6}
                                autoPlay loop muted></video>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 p-0">
                            <div className="row">
                                <div className="col-6 p-0">
                                    <div className="img-div">
                                        <img src={img5} className="img-fluid" alt="" />
                                    </div>
                                </div>
                                <div className="col-6 p-0">
                                    <div className="img-div">
                                        <img src={img4} className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 p-0">
                                    <div className="img-div">
                                        <img src={img1} className="img-fluid" alt="" />
                                    </div>
                                </div>
                                <div className="col-6 p-0">
                                    <div className="img-div">
                                        <img src={img2} className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 p-0">
                            <div className="img-div">
                                <video class="mt-3" src={vid7}
                                    autoPlay loop muted></video>
                            </div>
                        </div>
                        <div className="col-4 p-0">
                            <div className="img-div">
                                <video class="mt-3" src={vid5}
                                    autoPlay loop muted></video>
                            </div>
                        </div>
                        <div className="col-4 p-0">
                            <div className="img-div">
                                <img src={img3} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;