import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import FeatureCard from '../components/feature-card'
import GridCard from '../components/grid-card'
import Footer from '../components/footer'
import Hero from '../components/hero'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Agile Peterborough</title>
          <meta property="og:title" content="Agile Peterborough group homepage" />
        </Head>
        <Navbar></Navbar>
        <main className="home-main">
          <Hero></Hero>
          
          <div className="home-section-three section-container">
            <div className="home-max-width1 max-content-container">
              <h2 className="home-text04">
                A growing network of motivated technology businesses and
                professionals around Peterborough 
              </h2>
              <div className="home-cards-container">
                <FeatureCard image_src="/playground_assets/stars-200h.png"></FeatureCard>
                <FeatureCard
                  text="Code clubs, workshops, presentations and talks in schools and Universities"
                  text1="See how &gt;"
                  heading="Supporting Youth"
                  image_src="/playground_assets/hearth-200h.png"
                ></FeatureCard>
                <FeatureCard
                  text="We run learning hand-on learning workshops, coding as you go."
                  text1="Learn more &gt;"
                  heading="Hands on"
                  image_src="/playground_assets/mail-200h.png"
                ></FeatureCard>
                <FeatureCard
                  text="All our talks and events are run by members of the commity "
                  text1="Learn more &gt;"
                  heading="Peer led"
                  image_src="/playground_assets/paper-200h.png"
                ></FeatureCard>
              </div>
            </div>
          </div>
          <div className="home-section-two section-container">
            <div className="home-max-width2 max-content-container">
              <div className="home-content-container1">
                <h1 className="home-text05">
                  <span className="home-text06">
                    Peterborough&apos;s learning technology
                  </span>
                  <span className="home-text07"> Community</span>
                </h1>
                <span className="home-text08">
                  <span className="Content-Light">
                    First run in 2013 Agile Peterborough is a community focused
                    on building, accelerating and amplifying  the growth of
                    technology capability in and around the city 
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-image-container">
                <img
                  alt="image"
                  src="/playground_assets/herologo-1200w.png"
                  loading="lazy"
                  className="home-image"
                />
              </div>
            </div>
            <div className="home-max-width3 max-content-container">
              <div className="home-image-container1">
                <img
                  src="/playground_assets/_126734889_tv078804345-1200w.jpg"
                  alt="image"
                  className="home-image1"
                />
              </div>
              <div className="home-container1">
                <div className="home-container2">
                  <div className="home-container3">
                    <h1 className="home-text11">
                      <span>
                        Supporting
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="home-text13">Education</span>
                    </h1>
                    <span className="home-text14">
                      <br></br>
                      <br></br>
                    </span>
                    <span className="home-text17">
                      <span className="Content-Light">
                        We have over 10 years experience supporting schools and
                        universities, through talks, demonstrations, workshops
                        and events. Our members have run code clubs in primary
                        schools, pairing sessions with under-graduates and we
                        continue to work closely with academic organisations
                        across the region.
                      </span>
                      <br className="Content-Light"></br>
                      <br className="Content-Light"></br>
                      <span className="Content-Light">
                        We are proud to count some of the talented youngsters of
                        our early schools engagement as adult engineers and
                        community contributors
                      </span>
                      <br></br>
                      <br></br>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-max-width4 max-content-container">
              <div className="home-content-container2">
                <h1 className="home-text25">
                  <span>Agile-on-</span>
                  <span className="home-text27">Tap</span>
                </h1>
                <span className="home-text28">
                  <span className="Content-Light">
                    Agile on Tap is a event run from the back room of the
                    Brewery Tap in Peterborough.  A boutique tech event that
                    over the years has hosted some of the worlds premier
                    speakers. Topics can range from technical
                    &apos;how-tos&apos; and case studies to Product Strategy and
                    Team leadership with formats varying from talks to open
                    discussions and fishbowl discussions.
                  </span>
                  <br></br>
                  <br></br>
                </span>
              </div>
              <div className="home-image-container2">
                <img
                  alt="image"
                  src="/playground_assets/highres_226269472-1200w.jpeg"
                  loading="lazy"
                  className="home-image2"
                />
              </div>
            </div>
          </div>
          <div className="section-container">
            <div className="home-max-width5 max-content-container">
              <div className="home-heading-container">
                <h2 className="home-text32 Heading2">
                  <span>Love learning? you’ll </span>
                  <span>
                    simply love
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className="home-text35"></br>
                  <span className="home-text36">Agile Peterborough.</span>
                </h2>
                <span>
                  Please register on meetup to keep posted on upcoming events
                </span>
              </div>
              <div className="home-cards-container1">
                <GridCard image_src="/playground_assets/vector%203-200h.png"></GridCard>
                <GridCard
                  text="Follow your friends"
                  image_src="/playground_assets/vector%203%20%5B1%5D-200h.png"
                ></GridCard>
                <GridCard
                  text="Declutter your life inbox"
                  text1="Pick up new skills, get feedback on your internal processes and improve"
                  image_src="/playground_assets/vector%203%20%5B2%5D-200h.png"
                ></GridCard>
                <GridCard
                  text="Less apps, more space"
                  image_src="/playground_assets/vector%203%20%5B3%5D-200h.png"
                ></GridCard>
              </div>
            </div>
          </div>
        </main>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
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
          .home-text01 {
            color: var(--dl-color-grays-gray60);
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
          .home-text02 {
            color: var(--dl-color-grays-gray60);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
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
          .home-text03 {
            color: var(--dl-color-grays-gray60);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .home-section-three {
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-max-width1 {
            flex-direction: column;
          }
          .home-text04 {
            width: 1139px;
            font-size: 42px;
            align-self: center;
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-cards-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-section-two {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-max-width2 {
            padding-top: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-content-container1 {
            flex: 1;
            display: flex;
            max-width: 446px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text05 {
            font-size: 42px;
            margin-bottom: 24px;
          }
          .home-text06 {
            color: var(--dl-color-grays-dark100);
          }
          .home-text07 {
            color: var(--dl-color-backgrounds-primary);
          }
          .home-text08 {
            color: var(--dl-color-grays-gray100);
          }
          .home-image-container {
            flex: 1;
            margin-left: var(--dl-space-space-oneandhalfunits);
          }
          .home-image {
            width: 566px;
            object-fit: cover;
            margin-left: 85px;
          }
          .home-max-width3 {
            width: 1193px;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-image-container1 {
            flex: 1;
            align-self: stretch;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-image1 {
            width: 100%;
            object-fit: cover;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: 541px;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: 541px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container3 {
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-text11 {
            width: auto;
            font-size: 42px;
            align-self: flex-start;
            margin-bottom: 24px;
          }
          .home-text13 {
            color: var(--dl-color-backgrounds-primary);
          }
          .home-text14 {
            color: var(--dl-color-grays-gray100);
            height: auto;
          }
          .home-text17 {
            color: var(--dl-color-grays-gray100);
          }
          .home-max-width4 {
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-content-container2 {
            flex: 1;
            display: flex;
            max-width: auto;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text25 {
            font-size: 42px;
            margin-bottom: 24px;
          }
          .home-text27 {
            color: var(--dl-color-backgrounds-primary);
          }
          .home-text28 {
            color: var(--dl-color-grays-gray100);
            width: 100%;
          }
          .home-image-container2 {
            width: 631px;
            margin-left: var(--dl-space-space-oneandhalfunits);
          }
          .home-image2 {
            width: 566px;
            object-fit: cover;
            margin-left: 85px;
          }
          .home-max-width5 {
            flex-direction: column;
            justify-content: center;
          }
          .home-heading-container {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-text32 {
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text35 {
            color: var(--dl-color-backgrounds-primary);
          }
          .home-text36 {
            color: var(--dl-color-backgrounds-primary);
          }
          .home-cards-container1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          @media (max-width: 991px) {
            .home-max-width {
              flex-direction: column;
            }
            .home-content-container {
              width: 949px;
              height: 341px;
              margin-bottom: 42px;
              padding-right: 0px;
            }
            .home-text04 {
              width: auto;
            }
            .home-content-container1 {
              margin-bottom: 42px;
              padding-right: 0px;
            }
            .home-text05 {
              width: 100%;
            }
            .home-image {
              max-width: 100%;
              margin-left: 0px;
            }
            .home-text11 {
              width: 100%;
            }
            .home-content-container2 {
              margin-bottom: 42px;
              padding-right: 0px;
            }
            .home-text25 {
              width: 100%;
            }
            .home-image2 {
              max-width: 100%;
              margin-left: 0px;
            }
          }
          @media (max-width: 767px) {
            .home-text04 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-cards-container {
              flex-wrap: wrap;
              justify-content: space-between;
            }
            .home-max-width2 {
              flex-direction: column-reverse;
            }
            .home-content-container1 {
              max-width: 100%;
            }
            .home-image-container {
              width: 100%;
              margin-right: 0px;
            }
            .home-image {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-max-width3 {
              width: auto;
              flex-direction: column;
            }
            .home-image-container1 {
              width: 100%;
              margin-right: 0px;
            }
            .home-max-width4 {
              flex-direction: column-reverse;
            }
            .home-content-container2 {
              max-width: 100%;
            }
            .home-image-container2 {
              width: 100%;
              margin-right: 0px;
            }
            .home-image2 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text32 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-cards-container1 {
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 479px) {
            .home-content-container {
              width: auto;
            }
            .home-features-container {
              width: auto;
            }
            .home-text03 {
              color: var(--dl-color-grays-gray60);
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
            }
            .home-text04 {
              width: auto;
              height: auto;
            }
            .home-cards-container {
              justify-content: center;
            }
            .home-max-width2 {
              padding-top: 5px;
              padding-left: 5px;
              padding-right: 5px;
            }
            .home-image {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-max-width3 {
              width: auto;
            }
            .home-image-container1 {
              width: auto;
            }
            .home-container3 {
              width: auto;
            }
            .home-text11 {
              width: auto;
            }
            .home-max-width4 {
              padding-top: 5px;
              padding-left: 5px;
              padding-right: 5px;
            }
            .home-image2 {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
