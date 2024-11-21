import React from 'react';
import './SocialProffSection.css';

const SocialProffSection = () => {
    return (
        <div className="SocialProfileSection mt-5 mb-5 pt-5 d-flex flex-row justify-content-center">
            <div className='SocialProfileSection-container d-flex flex-column justify-content-center align-items-center'>
                <p className="SocialProfileSection-description mt-5">
                Join 4,000+ companies already growing
                </p>
                <div className='SocialProfileSection-logos-container text-center mt-3'>
                    <div className="row">
                        <div className='SocialProfileSection-logs-and-name-container col-5 col-md-2'>
                            <img src="https://res.cloudinary.com/dbuak9u4o/image/upload/v1732105340/Zysk%20Tech%20Assment/dqsbryufjifeomrige5n.png" className='SocialProffSection-logo' alt="logo"/>
                            <p className='SocialProfileSection-logo-name'>Bolt Shift</p>
                        </div>
                        <div className='SocialProfileSection-logs-and-name-container col-5 col-md-1'>
                            <img src="https://res.cloudinary.com/dbuak9u4o/image/upload/v1732105340/Zysk%20Tech%20Assment/plk29j0k6wpgyuxxoyc4.png" className='SocialProffSection-logo' alt="logo"/>
                            <p className='SocialProfileSection-logo-name'>Lightbox</p>
                        </div>
                        <div className='SocialProfileSection-logs-and-name-container col-5 col-md-2'>
                            <img src="https://res.cloudinary.com/dbuak9u4o/image/upload/v1732105340/Zysk%20Tech%20Assment/mopyovb7z7lmmx4jmk85.png" className='SocialProffSection-logo' alt="logo"/>
                            <p className='SocialProfileSection-logo-name'>FeatherDev</p>
                        </div>
                        <div className='SocialProfileSection-logs-and-name-container col-5 col-md-1'>
                            <img src="https://res.cloudinary.com/dbuak9u4o/image/upload/v1732105340/Zysk%20Tech%20Assment/kwguhpe2qo4t64psruai.png" className='SocialProffSection-logo' alt="logo"/>
                            <p className='SocialProfileSection-logo-name'>Spherule</p>
                        </div>
                        <div className='SocialProfileSection-logs-and-name-container col-5 col-md-2'>
                            <img src="https://res.cloudinary.com/dbuak9u4o/image/upload/v1732105340/Zysk%20Tech%20Assment/hehulfu92mrtanjonwkk.png" className='SocialProffSection-logo' alt="logo"/>
                            <p className='SocialProfileSection-logo-name'>GlobalBank</p>
                        </div>
                        <div className='SocialProfileSection-logs-and-name-container col-5 col-md-1'>
                            <img src="https://res.cloudinary.com/dbuak9u4o/image/upload/v1732105340/Zysk%20Tech%20Assment/w1zoarojgzb9zymsc3bm.png" className='SocialProffSection-logo' alt="logo"/>
                            <p className='SocialProfileSection-logo-name'>Nietzsche</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialProffSection;
