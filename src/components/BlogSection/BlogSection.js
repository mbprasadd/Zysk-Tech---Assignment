import React from 'react';
import './BlogSection.css';

const BlogSection = ()=> {
  const menuItems = [
    {
      image: 'https://res.cloudinary.com/dbuak9u4o/image/upload/v1732113895/Zysk%20Tech%20Assment/da5bdjxwckklbsu2adpg.png',
      subTitle: "Design",
      title: 'UX review presentations',
      discription : "How do you create compelling presentations that wow your colleagues and impress your managers?",
      profile :"https://res.cloudinary.com/dbuak9u4o/image/upload/v1732113894/Zysk%20Tech%20Assment/ehxowkhgbpw9vtzhchoh.png",
      name : "Olivia Rhye",
      date : "20 Jan 2024"    
    },
    {
      image: 'https://res.cloudinary.com/dbuak9u4o/image/upload/v1732113895/Zysk%20Tech%20Assment/c3ymu3ffy78a3q3yj37u.png',
      subTitle: "Product",
      title: 'Migrating to Linear 101',
      discription : "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      profile :"https://res.cloudinary.com/dbuak9u4o/image/upload/v1732113894/Zysk%20Tech%20Assment/ofmoco1y1kfueqgxunjm.png",
      name : "Phoenix Baker",
      date : "19 Jan 2024"    
    },
    {
      image: 'https://res.cloudinary.com/dbuak9u4o/image/upload/v1732113895/Zysk%20Tech%20Assment/gkaywvezmqzsx1dn8sop.png',
      subTitle: "Software Engineering",
      title: 'Building your API stack',
      discription : "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      profile :"https://res.cloudinary.com/dbuak9u4o/image/upload/v1732113894/Zysk%20Tech%20Assment/bzs5zb7uhwqfgcsai61u.png",
      name : "Lana Steiner",
      date : "18 Jan 2024"    
    },
  ];

  const arrow = <img src="https://res.cloudinary.com/dbuak9u4o/image/upload/v1732173130/Zysk%20Tech%20Assment/ehitdni2x5ovmwyw2fue.png" className='arrow'/>

  return (
    <div className="BlogSection p-5">
      <div className="container">
        <div className='BlogSection-container d-flex flex-row justify-content-sapce-between'>
          <div>
            <p className='BlogSection-small-head'>Our blog</p>
            <h1 className="BlogSection-head mb-3">Lastest blog posts</h1>
            <p className='BlogSection-discription mb-5' >Tool and strategies modern teams need to help their companies grow.</p>
          </div>
          <div className=''>
            <button className='BlogSection-viwellAll-button d-md-inline'>View All Post's</button>
          </div>
        </div>
        <div className="row">
          {menuItems.map((item, index) => (
            <div className="BlogSection-card-container col-12 col-md-6 col-lg-3" key={index}>
              <div className="BlogSection-card mb-5">
                <img className="BlogSection-card-image" src={item.image} alt={item.title} />
                <h6 className=' BlogSection-card-subhead mt-3'>{item.subTitle}</h6>
                <h1 className="BlogSection-card-head mt-1">{item.title} {arrow}</h1>
                <p className='BlogSection-card-discription'>{item.discription}</p>
                <div className='BlogSection-profile-name-container d-flex flex-row align-item-center'> 
                  <img src={item.profile} className='BlogSection-profile' alt="profile" />
                  <div className='BlogSection-name-date-container'>
                    <h3 className='BlogSection-name'>{item.name}</h3>
                    <p className='BlogSection-date'>{item.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

{/* <a href="#" className="menu-item-link">
View All
</a> */}

export default BlogSection;
