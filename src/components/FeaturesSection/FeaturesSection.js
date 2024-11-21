import React from 'react';
import './FeaturesSection.css';

const  FeaturesSection = ()=> {
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
    {
      image: 'https://res.cloudinary.com/dbuak9u4o/image/upload/v1732106252/Zysk%20Tech%20Assment/Features%20Section/dtg5zrdd8op9yfr1ri2e.png',
      title: 'Connect with customers',
      description: 'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
    },
    {
      image: 'https://res.cloudinary.com/dbuak9u4o/image/upload/v1732106252/Zysk%20Tech%20Assment/Features%20Section/iutygvawxy7w4uxnbo9o.png',
      title: 'Connect the tools you already use',
      description: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
    },
    {
      image: 'https://res.cloudinary.com/dbuak9u4o/image/upload/v1732106251/Zysk%20Tech%20Assment/Features%20Section/olim8umucgcupsnnzvvo.png',
      title: 'Our people make the difference',
      description: 'We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.',
    },
  ];
 
  return (
    <div  className="FeaturesSection-section p-5 mt-5">
      <div className="container text-center">
      <button className='FeaturesSection-button'>Features</button>
        <h1 className="FeaturesSection-head">Analytics that feels like it’s from the future</h1>
        <p className="FeaturesSection-description mb-5">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        <div className="row">
          {wcuData.map((item, index) => (
            <div className="col-12 col-md-4" key={index}>
              <div className="FeaturesSection-card mb-3">
                <img className="FeaturesSection-card-image" src={item.image} alt={item.title} />
                <h1 className="FeaturesSection-card-head">{item.title}</h1>
                <p className="FeaturesSection-card-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
