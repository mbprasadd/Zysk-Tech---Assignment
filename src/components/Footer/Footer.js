import React from 'react';
import './Footer.css';

const footerData = [
  {
    heading : "Product",
    footerLinks : ["Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases"]
  },
  {
    heading : "Company",
    footerLinks : ["About us", "Careers", "Press", "News", "Media kit", "Contact"]
  },
  {
    heading : "Resources",
    footerLinks : ["Blog", "Newsletter", "Events", "Help centre", "Tutorials", "Support"]
  },
  {
    heading : "Use cases",
    footerLinks : ["Startups", "Enterprise", "Government", "SaaS centre", "Marketplaces", "Ecommerce"]
  },
  {
    heading : "Social",
    footerLinks : ["Twitter", "LinkedIn", "Facebook", "GitHub", "AngelList", "Dribbble"]
  },
  {
    heading : "Legal",
    footerLinks : ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"]
  }
]

const  Footer = ()=> {
  return (
    <div  className="FooterSection p-5 mt-5">
      <div className="container">
        <div className="row">
          {footerData.map((each, index) => (
            <div key={index} className="FooterSection-card-container mb-5 p-3 col-6 col-lg-2 d-flex flex-column justify-content-center align-items-center">
                <h1 className="FooterSection-card-head">{each.heading}</h1>
                {each.footerLinks.map((link, index) => (
                  <p key={index} className="FooterSection-card-links">{link}</p>
                ))}
            </div>
          ))}
            <div className="FooterSection-pofile-title-container mt-5 d-flex justify-content-between">
                <div className='FooterSection-pofile-container d-flex flex-row  align-items-center'>
                  <img src="https://res.cloudinary.com/dbuak9u4o/image/upload/v1732162979/Zysk%20Tech%20Assment/eugmfdzd9gwiq7obrbk4.png" className='FooterSection-pofile' alt="FooterSection Pofile" />
                  <p className='FooterSection-profile-name'>Untitled UI</p>
                </div>
                <p className='FooterSection-rights'>
                  © 2077 Untitled UI. All rights reserved.  
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
