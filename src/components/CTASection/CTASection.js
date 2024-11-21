import React from 'react';
import './CTASection.css';

const  CTASection = () => {
  return (
      <div className="CTASection text-center p-5">
        <div className='container d-flex flex-column align-items-center m-5'>
            <h1 className="CTASection-head mb-3">Start your free trial</h1>
            <p className="CTASection-description mb-4">Join over 4,000+ startups already growing with Untitled.</p>
            <div className='row'>
                <button className="CTASection-learn-more-button mb-3 col-12 col-md-5">Learn more</button>
                <button className="CTASection-getstarted-button col-12 col-md-6">Get started</button> 
            </div>
        </div>
    </div>
  );
}

export default CTASection;
