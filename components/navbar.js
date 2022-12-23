import React from 'react'

import PropTypes from 'prop-types'
import NavigationLinks from './navigation-links'

const Navbar = (props) => {
  return (
    <>
      <div className="navbar-navbar-container">
        <header data-role="Header" className="navigation-container">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="navbar-image"
          />
          <div className="navbar-nav">
            <NavigationLinks rootClassName="navigation-links-root-class-name10"></NavigationLinks>
          </div>
          <div data-role="BurgerMenu" className="navigation-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="navigation-mobile-menu">
            <div className="navbar-nav1">
              <div className="navbar-container">
                <img
                  alt={props.image_alt1}
                  src={props.image_src1}
                  className="navbar-image1"
                />
                <div data-role="CloseMobileMenu" className="navbar-menu-close">
                  <svg viewBox="0 0 1024 1024" className="navbar-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="navigation-links-root-class-name11"></NavigationLinks>
              
            </div>
            <div className="navbar-social-media">
              <span className="navbar-text">{props.text}</span>
             
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .navbar-navbar-container {
            top: 0;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .navbar-image {
            width: 450px;
          }
          .navbar-nav {
            display: flex;
          }
          .navbar-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-container {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar-image1 {
            width: 106px;
          }
          .navbar-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-primary-btn {
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .navbar-social-media {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-text {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .navbar-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .navbar-icon04 {
            width: 24px;
            height: 24px;
            transition: 0.3s;
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-icon04:hover {
            fill: var(--dl-color-backgrounds-primary);
            cursor: pointer;
          }
          .navbar-icon08 {
            width: 24px;
            height: 24px;
            transition: 0.3s;
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-icon08:hover {
            fill: var(--dl-color-backgrounds-primary);
            cursor: pointer;
          }
          .navbar-icon12 {
            width: 24px;
            height: 24px;
            transition: 0.3s;
            margin-right: var(--dl-space-space-twounits);
          }
          .navbar-icon12:hover {
            fill: var(--dl-color-backgrounds-primary);
            cursor: pointer;
          }
          .navbar-icon14 {
            width: 24px;
            height: 24px;
            transition: 0.3s;
          }
          .navbar-icon14:hover {
            fill: var(--dl-color-backgrounds-primary);
            cursor: pointer;
          }
          @media (max-width: 767px) {
            .navbar-nav {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  image_src: '/playground_assets/headerlogo-200h.png',
  image_src1: '/playground_assets/birds.png',
  image_alt: 'logo',
  image_alt1: 'image',
  text: 'Follow us',
  PrimaryBtn1: 'Get started',
}

Navbar.propTypes = {
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  text: PropTypes.string,
  PrimaryBtn1: PropTypes.string,
}

export default Navbar
