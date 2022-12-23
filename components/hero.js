import React from 'react'
const Hero = (props) => {
  return (
    <>
      <div className="section-container herobg">
        <div className="section-container herobgBlur">
            <div className="home-max-width max-content-container">
              <div className="home-content-container">
                <h1 className="herobgClear">
                {props.header} 
                </h1>
              {props.subtext && 
                <div className="home-features-container">
                  <div className="hero-feature">
                    
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="hero-icon"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="hero-sm-text">
                      Member led events, talks and showcases
                    </span>
                  </div>
                  <div className="hero-feature">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="hero-icon"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="hero-sm-text">
                      Code clubs, hackathons and academic support
                    </span>
                  </div>
                  <div className="hero-feature">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="hero-icon"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="hero-sm-text">
                      Walks, socials and networking
                    </span>
                  </div>
                </div>
                }


              </div>
            </div>
          </div>
        </div>
          <style>
          {`

          .herobg {
            align-self: center;
            align-items: center;
            padding:0px;
            background-size: cover;
            background-image: url(/playground_assets/`+props.imageURL+`);
            background-color: rgba(10,10,10,0.3);
          }

          .herobgClear {
            color: var(--dl-color-grays-white100);
          }

          .herobgBlur {
            background-color: rgba(10,10,10,0.3);
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(7px);
            height: 100%;
          }



          .home-max-width {
            align-self: center;
            align-items: stretch;
          }




          .home-content-container {
            flex: 1;
            width: 100%;
            height: 242px;
            display: flex;
            min-width: 50%;
            align-items: flex-start;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .home-features-container {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: flex-end;
            align-items: flex-start;
            flex-direction: column;
            padding-top:35px;
          }
          .hero-feature {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            flex-direction: row;
          }
          .hero-icon {
            fill: #62bf77;
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .hero-sm-text {
            color: var(--dl-color-grays-white100);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          @media (max-width: 991px) {
            .home-max-width {
              flex-direction: column;
            }

          `}
          </style>
    </>
  )
}

export default Hero
