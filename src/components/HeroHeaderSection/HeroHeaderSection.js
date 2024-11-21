import React from 'react';
import './HeroHeaderSection.css';


const HeroHeaderSection = () => {
  const arrow = <img src="https://res.cloudinary.com/dbuak9u4o/image/upload/v1732172932/Zysk%20Tech%20Assment/qugmp6q7jtazzp1ondkk.png" className='arrow'/>
  return (
    <div className="heroheadersection-container d-flex flex-column justify-content-center align-items-center">
      <div className="heroheadersection-card text-center">
        <button className='top-buttton mb-3'> <span className='span-color'>New feature</span> Check out the team dashboard {arrow}</button>
        <h1 className="heroheadersection-head mb-4">Beautiful analytics to grow smarter</h1>
        <p className="heroheadersection-caption mb-4">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        <button className="heroheadersection-demo-button">Demo</button>
        <button className="heroheadersection-signup-button">Sign Up</button>
      </div>
      <div className='content-container text-center'>
        <img className="content-image" src="https://res.cloudinary.com/dbuak9u4o/image/upload/v1732101209/Zysk%20Tech%20Assment/content.png" alt="content"/>
      </div>
    </div>
  );
}

export default HeroHeaderSection;
