import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Layout } from 'antd';
import styles from '../../styles/dashboard-header.module.css';

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header } = Layout;

const HeaderComponent = ({
  loggedInUser,
  isSideMenuCollapsed,
  setIsSideMenuCollapsed,
  signout,
  setSelectedMenuItem,
  userStatus
}) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();
  const checkScroll = () => {
    if (window.scrollY > 120) {
      setIsScroll(true);
      return;
    }
    setIsScroll(false);
  };
  useEffect(() => {
    document.addEventListener('scroll', checkScroll);
    return () => document.removeEventListener('scroll', checkScroll);
  });

  // scroll to top on route change
  useEffect(() =>{
    window.scrollTo(0, 0);
  },[pathname]);
  // const handleToggleNavigation = () => {
  //   setIsCollapsed(!isCollapsed);
  // };

  return (
    <Header
      className={`${styles.site_layout_background} ${styles.header}`}
      style={{ padding: 0 }}
    >
      <nav
        className={`navbar navbar-expand-lg navbar-header-color fixed-top navbar-custom navbar-dark d-block d-sm-none ${
          isScroll ? 'nav-sticky' : ' sticky'
        }`}
        style={{ background: '#001529 !important' }}
      >
        <div className="container">
          <Link to="/">
            <img
              className="header-logo"
              src="/images/logo/dashboard-logo.png"
              alt=" Rating Suite"
            ></img>
          </Link>
          <button
            className="navbar-toggler text-light"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
            }}
          >
            {showMobileMenu ? (
              <span className="my-1 mx-2 close font-weight-normal close-admin-nav">
                x
              </span>
            ) : (
              <span className="navbar-toggler-icon"></span>
            )}
          </button>
          <div
            className={`collapse${
              showMobileMenu ? ' show ' : ' '
            }navbar-collapse`}
            id="navbarCollapse"
          >
            <ul className="navbar-nav mr-auto text-left">
              <li className="nav-item dashboard-nav" onClick={() => {
                setShowMobileMenu(!showMobileMenu);
                setSelectedMenuItem('/dashboard');
              }}>
                <Link className="nav-link nav-text-light" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item dashboard-nav"  onClick={() => {
                setShowMobileMenu(!showMobileMenu);                
                setSelectedMenuItem('/dashboard/product-setup'); 
              }}>
                <Link className="nav-link" to="/dashboard/product-setup">
                  Product Setup
                </Link>
              </li>
              <li className={ 'nav-item dashboard-nav ', 
                userStatus === 'NEW' || userStatus === 'PROSPECT'
                  ? 'link-disabled'
                  : ''
                } onClick={() => {
                setShowMobileMenu(!showMobileMenu); 
                setSelectedMenuItem('/dashboard/reviews');
              }}>
                <Link className="nav-link" to="/dashboard/reviews">
                  Reviews
                </Link>
              </li>
              <li className={ 'nav-item dashboard-nav ', 
                userStatus === 'NEW' || userStatus === 'PROSPECT'
                  ? 'link-disabled'
                  : ''
                } onClick={() => {
                setShowMobileMenu(!showMobileMenu); 
                setSelectedMenuItem('/dashboard/insights');
              }}>
                <Link className="nav-link" to="/dashboard/insights">
                  Insights
                </Link>
              </li>
              <li className={ 'nav-item dashboard-nav ', 
                userStatus === 'NEW' || userStatus === 'PROSPECT'
                  ? 'link-disabled'
                  : ''
                } onClick={() => {
                setShowMobileMenu(!showMobileMenu);           
                setSelectedMenuItem('/dashboard/comparison');
              }}>
                <Link className="nav-link" to="/dashboard/comparison">
                  Comparison
                </Link>
              </li>
              <li className="nav-item dashboard-nav" onClick={() => {
                setShowMobileMenu(!showMobileMenu);              
                setSelectedMenuItem('/dashboard/account');
              }}>
                <Link className="nav-link" to="/dashboard/account">
                  Account
                </Link>
              </li>
            </ul>
            <div>
              <ul className="text-right list-unstyled list-inline mb-0 text-left">
                <li className="nav-item list-inline-item" onClick={signout}>
                  <button className="nav-link nav-logout-mobile" style = {{'border': 'none', 'background': 'transparent', 'color': '#1890ff'}}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {React.createElement(
        isSideMenuCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
        {
          className: `${styles.trigger}`,
          onClick: () => {
            setIsSideMenuCollapsed(!isSideMenuCollapsed);
          },
        }
      )}
      <div className={`${styles.userinfo} d-none d-sm-block`}>
        <span className={`${styles.userinfo_username}`}>
          <span className="font-italic">Logged in as</span>{' '}
          {loggedInUser ? loggedInUser.username : null}
        </span>
        <button className="btn btn-custom btn-dashboard" onClick={signout}>
          Log Out
        </button>
      </div>
    </Header>
  );
};

export default HeaderComponent;
