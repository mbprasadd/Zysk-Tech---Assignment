import React from 'react';
import './TestimonialSection.css';

const Footer = () => {
    return (
        <div class="TestimonialSection p-5 mb-3">
            <div class="container">
                <div class="row">
                    <div className='TestimonialSection-logs-and-name-container d-flex flex-row justify-content-center'>
                        <img src="https://res.cloudinary.com/dbuak9u4o/image/upload/v1732108022/Logomark_5_hsajxx.png" className='SocialProffSection-logo' alt="Sisphus-logo"/>
                        <p className='TestimonialSection-logo-name'>Sisphus</p>
                    </div>
                    <div class="col-12">
                        <h1 class="TestimonialSection-head text-center">We’ve been using Untitled to kick start every new project and can’t imagine working without it.</h1>
                    </div>
                    <div className="col-12 TestimonialSection-card mb-3">
                        <img className="TestimonialSection-card-image" src="https://res.cloudinary.com/dbuak9u4o/image/upload/v1732108442/Zysk%20Tech%20Assment/hvka4vqsdlubo1nr0h1y.png" alt="TestimonialSection logo" />
                        <h1 className="TestimonialSection-card-head">Candice Wu</h1>
                        <p className="TestimonialSection-card-description">Product Manager, Sisyphus</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
