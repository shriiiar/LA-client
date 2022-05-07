import React from 'react';
import vid from '../../../vid/Elite - Car Showroom Promo.mp4';
import './About.css';

const About = () => {
    return (
        <div style={{ margin: "100px 0 1100px 0" }} className='p-5 row flex-column'>
            <aside className="profile-card-about">
                <header>
                    <h1 className='mt-5'>LA Customs</h1>
                </header>
                <div className="profile-bio">
                    <p className='fs-4'>From imported cars to custom we got your back. A mordern car inventory with world class Auto Pilot System. Give your car the intelligence it needs. Let it rain speed. <span className='button-2'>PEACE</span></p>
                </div>
                <video class="mt-3" src={vid}
                    autoPlay loop muted></video>
            </aside>
        </div>
    );
};

export default About;