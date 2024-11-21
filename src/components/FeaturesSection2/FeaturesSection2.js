import React from 'react';
import './FeaturesSection2.css';

const  FeaturesSection2 = ()=> {
  const wcuData = [
    {
      image: 'https://res.cloudinary.com/dbuak9u4o/image/upload/v1732106252/Zysk%20Tech%20Assment/Features%20Section/ubtyrji3ks4ot9wk9o4r.png',
      title: 'Share team inboxes',
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      image: 'https://res.cloudinary.com/dbuak9u4o/image/upload/v1732106252/Zysk%20Tech%20Assment/Features%20Section/bghh44n8xtswxlc0l4ym.png',
      title: 'Deliver instant answers',
      description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
    },
    {
      image: 'https://res.cloudinary.com/dbuak9u4o/image/upload/v1732106252/Zysk%20Tech%20Assment/Features%20Section/mvlcuzfgom2y7p9osg0a.png',
      title: 'Manage your team with reports',
      description: 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
    },
  ];

  const arrow = <img src="https://res.cloudinary.com/dbuak9u4o/image/upload/v1732172932/Zysk%20Tech%20Assment/qugmp6q7jtazzp1ondkk.png" className='arrow'/>
 
  return (
    <div  className="FeaturesSection-section p-5 mt-5">
      <div className="container text-center">
        <button className='FeaturesSection2-button'>Features</button>
        <h1 className="FeaturesSection-head">Cutting-edge features for advanced analytics</h1>
        <p className="FeaturesSection-description mb-5">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        <img className='FeaturesSection2-image d-none d-md-inline' alt="FeaturesSection2-image" src="https://res.cloudinary.com/dbuak9u4o/image/upload/v1732110103/Zysk%20Tech%20Assment/t0nfon2gi0153al5mnsw.png" />
        <img className='FeaturesSection2-image d-md-none' alt="FeaturesSection2-image" src="https://res.cloudinary.com/dbuak9u4o/image/upload/v1732110996/Zysk%20Tech%20Assment/gy3e9c5djkxt0azffzos.png" />
        <div className="row">
          {wcuData.map((item, index) => (
            <div className="col-12 col-md-4" key={index}>
              <div className="FeaturesSection-card mb-3">
                <img className="FeaturesSection-card-image" src={item.image} alt={item.title} />
                <h1 className="FeaturesSection-card-head">{item.title}</h1>
                <p className="FeaturesSection-card-description">{item.description}</p>
                <p className='link'>Learn more {arrow}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection2;
