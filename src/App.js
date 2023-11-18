import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header">
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Services</li>
            <li className="nav-item">Projects</li>
            <li className="nav-item">Contact</li>
          </ul>
        </nav>
      </header>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to JoshArchitectures</h1>
          <p className="hero-description">
            We design and build beautiful and functional spaces that inspire.
          </p>
          <button className="hero-button">Learn More</button>
        </div>
      </section>
      <section className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <img src="/images/jdesign.jpg" alt="Service 1" className="service-image" />
            <h3 className="service-title">Architectural Design</h3>
            <p className="service-description">
              We create innovative and sustainable architectural designs that meet our clients' needs.
            </p>
          </div>
          <div className="service-item">
            <img src="/images/spinterior.jpg" alt="Service 2" className="service-image" />
            <h3 className="service-title">Interior Design</h3>
            <p className="service-description">
              Our interior design team transforms spaces into functional and aesthetically pleasing environments.
            </p>
          </div>
          <div className="service-item">
            <img src="/images/spmgmt.jpg" alt="Service 3" className="service-image" />
            <h3 className="service-title">Construction Management</h3>
            <p className="service-description">
              We oversee the construction process to ensure quality and timely completion of projects.
            </p>
          </div>
        </div>
      </section>
      <section className="projects-section">
        <h2 className="section-title">Our Projects</h2>
        <div className="projects-grid">
          <div className="project-item">
            <img src="/images/spmodern.jpg" alt="Project 1" className="project-image" />
            <h3 className="project-title">Modern Residence</h3>
            <p className="project-description">
              A contemporary home designed to maximize natural light and create a seamless indoor-outdoor living experience.
            </p>
          </div>
          <div className="project-item">
            <img src="/images/spoffice.jpg" alt="Project 2" className="project-image" />
            <h3 className="project-title">Office Space</h3>
            <p className="project-description">
              A modern office space designed to foster collaboration and productivity.
            </p>
          </div>
          <div className="project-item">
            <img src="/images/sprest.jpg" alt="Project 3" className="project-image" />
            <h3 className="project-title">Restaurant</h3>
            <p className="project-description">
              A stylish restaurant with a unique interior design that creates a memorable dining experience.
            </p>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <h2 className="section-title">Contact Us</h2>
        <p className="contact-description">
          PhoneNo: +251943205548
       <br/>
          Email: joshmanye@gmail.com
        </p>
        <p className="contact-description">
          We would love to hear from you. Get in touch with us to discuss your project or ask any questions.
        </p>
       
      </section>
      <footer className="footer">
        <p className="footer-text">© 2022 JoshArchitectures. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
