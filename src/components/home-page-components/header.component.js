import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HeaderComponent() {
  const [isScroll, setIsScroll] = useState(false);
  const [show, setShow] = useState(false);
  const checkScroll = () => {
    if (window.scrollY > 120) {
      setIsScroll(true);
      return;
    }
    setIsScroll(false);
  };

  const handleToggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    document.addEventListener('scroll', checkScroll);
    return () => document.removeEventListener('scroll', checkScroll);
  });

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top navbar-custom ${
        isScroll ? 'nav-sticky' : ' sticky'
      }`}
    >
      <div className="container">
        <Link to="/">
          <img
            className="header-logo"
            src="../images/logo/header-logo.png"
            alt=" Rating Suite"
          ></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          {show ? (
            <span className="my-1 mx-2 close font-weight-normal">x</span>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>
        <div
          className={`collapse${show ? ' show ' : ' '}navbar-collapse`}
          id="navbarCollapse"
        >
          <ul className="navbar-nav mr-auto text-left">
            <li className="nav-item home-page-nav" onClick={handleToggle}>
              <Link to="#features" className="nav-link">
                Features
              </Link>
            </li>
            <li className="nav-item home-page-nav" onClick={handleToggle}>
              <Link to="#pricing" className="nav-link">
                Pricing
              </Link>
            </li>
            <li className="nav-item home-page-nav" onClick={handleToggle}>
              <Link to="#faq" className="nav-link">
                FAQ
              </Link>
            </li>
            <li className="nav-item home-page-nav" onClick={handleToggle}>
              <Link to="#contact-us" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
          <div>
            <ul className="text-right list-unstyled list-inline mb-0 nav-social">
              <li className="nav-item list-inline-item">
                <Link to="/signin" className="nav-link">
                  Sign In
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/signup">
                  <button className="btn btn-custom-logo-color">Sign Up</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderComponent;
