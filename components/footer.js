import React from 'react'

const Footer = (props) => {
  return (
    <>
      <footer className="footer-footer section-container">
        <div className="footer-max-width max-content-container">
          <div className="footer-container">
            <span className="footer-text Content-Light">
              Agile Peterborough is a volunteer run organisation
            </span>
            <div className="footer-social-media">
              <span className="footer-text1">Follow us</span>
              
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-container2">
              <span className="footer-link">Home</span>
              <span className="footer-link">About</span>
              <span className="footer-link">Education</span>
              <span className="footer-link">Meetup</span>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer-footer {
            border-color: rgba(33, 33, 33, 0.1);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .footer-max-width {
            justify-content: space-between;
          }
          .footer-container {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text {
            color: var(--dl-color-grays-gray100);
            max-width: 350px;
            margin-bottom: 60px;
          }
          .footer-social-media {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text1 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .footer-icon {
            width: 24px;
            height: 24px;
            transition: 0.3s;
            margin-right: var(--dl-space-space-twounits);
          }
          .footer-icon:hover {
            fill: var(--dl-color-backgrounds-primary);
            cursor: pointer;
          }
          .footer-icon04 {
            width: 24px;
            height: 24px;
            transition: 0.3s;
            margin-right: var(--dl-space-space-twounits);
          }
          .footer-icon04:hover {
            fill: var(--dl-color-backgrounds-primary);
            cursor: pointer;
          }
          .footer-icon08 {
            width: 24px;
            height: 24px;
            transition: 0.3s;
            margin-right: var(--dl-space-space-twounits);
          }
          .footer-icon08:hover {
            fill: var(--dl-color-backgrounds-primary);
            cursor: pointer;
          }
          .footer-icon10 {
            width: 24px;
            height: 24px;
            transition: 0.3s;
          }
          .footer-icon10:hover {
            fill: var(--dl-color-backgrounds-primary);
            cursor: pointer;
          }
          .footer-links {
            flex: 0 0 auto;
            width: 40%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .footer-container2 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          @media (max-width: 991px) {
            .footer-max-width {
              flex-direction: column-reverse;
            }
            .footer-container {
              width: 100%;
            }
            .footer-links {
              width: 100%;
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .footer-links {
              flex-wrap: wrap;
            }
            .footer-container2 {
              width: 100%;
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Footer
