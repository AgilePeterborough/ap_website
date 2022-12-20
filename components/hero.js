import React from 'react'

const Hero = (props) => {
  return (
    <>
      <div className="section-container herobg">
            <div className="home-max-width max-content-container">
              <div className="home-content-container">
                <h1 className="herobgClear">
                  Promoting technology in Peterborough
                </h1>
                <div className="home-features-container">
                  <div className="home-feature">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="hero-sm-text">
                      Member led events, talks and showcases
                    </span>
                  </div>
                  <div className="home-feature1">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon2"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="hero-sm-text">
                      Code clubs, hackathons and academic support
                    </span>
                  </div>
                  <div className="home-feature2">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon4"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="hero-sm-text">
                      Walks, socials and networking
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style>
{`

          .herobg {
  align-self: center;
  box-shadow: inset 0 0 2000px rgba(0, 0, 0, .9);
  align-items: center;
  padding-top: var(--dl-space-space-oneandhalfunits);
  padding-bottom: var(--dl-space-space-oneandhalfunits);
  background-size: cover;
  background-color: rgba(10,10,10,0.9);
  background-image: url("/playground_assets/highres_226269472-1200w.jpeg");
  backdrop-filter:blur(10px);
}

.herobg::before {
  filter: blur(10px);
}
.home-container {
  width: 100%;
  display: flex;
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--dl-color-backgrounds-gray);
}
.home-main {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-max-width {
  align-self: center;
  align-items: stretch;
}
.home-content-container {
  flex: 1;
  width: 100%;
  height: 442px;
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
}
.home-feature {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: row;
}
.home-icon {
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
.home-feature1 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: row;
}
.home-icon2 {
  fill: #62bf77;
  width: 17px;
  height: 17px;
  min-width: 17px;
  margin-right: 12px;
}

.home-feature2 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.home-icon4 {
  fill: #62bf77;
  width: 17px;
  height: 17px;
  min-width: 17px;
  margin-right: 12px;
}


`}
          </style>
    </>
  )
}

export default Hero
