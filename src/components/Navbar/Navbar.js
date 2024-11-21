import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://res.cloudinary.com/dbuak9u4o/image/upload/v1732162979/Zysk%20Tech%20Assment/eugmfdzd9gwiq7obrbk4.png"
            alt="title Logo"
            className="nav-logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-link active" id="title" href="#untitledSection">Untitled UI</a>
            <a className="nav-link" href="#homeSection">Home</a>
            <a className="nav-link" href="#productsSection">Products</a>
            <a className="nav-link" href="#resourceSection">Resorce</a>
            <a className="nav-link" href="#pricingSection">Pricing</a>
          </div>
        </div>
        {/* <img src="https://res.cloudinary.com/dbuak9u4o/image/upload/v1732113894/Zysk%20Tech%20Assment/ehxowkhgbpw9vtzhchoh.png" className='nav-profile col-none' /> */}
      </div>
    </nav>
  );
}

export default Navbar;
