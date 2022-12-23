import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import FeatureCard from '../components/feature-card'
import GridCard from '../components/grid-card'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Twopanel from '../components/two-panel-container'
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
        <div className="home-cards-container">
                <FeatureCard 
                  heading="Code Clubs"
                  text="In various schools throughout Peterborough our members have run or supported code clubs "
                  image_src="/playground_assets/codeclub.png"
                  url="https://codeclub.org/en/volunteer"
                  internal="false"
                ></FeatureCard>
                <FeatureCard
                  text="Our members visit schools to give engaging talks to students about working in tech."
                  text1=""
                  heading="Intro talks"
                  url="/education"
                  image_src="/playground_assets/female.png"
                ></FeatureCard>
                <FeatureCard
                  text="We help to organise coding session between employers and students."
                  text1=""
                  heading="Code Reviews"
                  image_src="/playground_assets/coworkers.png"
                ></FeatureCard>
                <FeatureCard
                  text="We've helped to organise and match placements for passionate students with local businesses "
                  text1=""
                  heading="Industrial Placements"
                  image_src="/playground_assets/employee.png"
                ></FeatureCard>
              </div>
          <div className="home-section-two section-container">
          <Twopanel
             text="For over 10 years members of our community supported by the businesses they work for have helped to run code clubs in primary schools 
             across the city. We also supported teachers with coding workshops, guidance and classroom visits, "
             title1="Code Clubs"
             title2=""
             image_src="/playground_assets/kids2.jpg"
             imageRight="true"
          ></Twopanel>
          <Twopanel
             text="We have over 10 years experience supporting schools and
             universities, through talks, demonstrations, workshops, 
             events and placements. Our members have run code clubs in primary
             schools, pairing sessions with under-graduates, helped organise hackathons, interviews and open days and we
             continue to work closely with academic organisations
             across the region. We are proud to count some of the talented youngsters of
             our early schools engagement as now adult engineers and
             community contributors at Agile Peterborough"
             title1="Supporting&nbsp;"
             title2="Education"
             image_src="/playground_assets/aru.jpg"
          ></Twopanel>
          <Twopanel
             text="Many of our members have mentored and coached junior members of staff, extending these skills to students allows businesses the
             opportunity to advance their employees, whilst inspiring and supporting under-graduates as they progress through their programmes. 
             Through our engagement programmes we have been able to help develop new modules for degree courses aligning them with current development techniques, 
             create unique pairing opportunities where engineers code directly with students and help to inspire many of the students to go on to sucessful careers"
             title1="Universities and"
             title2="&nbsp;Students"
             imageRight="true"
             image_src="/playground_assets/kids1.jpg"
          ></Twopanel>
           <Twopanel
             text="Our first cross company student placement saw us interview 20 students over a day of testing alongside BGL and ADP. At the end of the day we were able to
             jointly offer 6 candidates summer-long placements. The programme ran for several years providing both companies with a number of graduates. All of the candidates went onto
             further careers in the indsutry. A few of those graduates remain in place at their respective placements having learnt and progressed and been supported, a real testement to the great employers that took them on."
             title1="Industrial&nbsp;"
             title2="Placements"
             image_src="/playground_assets/gdcr1.jpeg"
          ></Twopanel>


            



            
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
            
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-section-two {
            padding-top: var(--dl-space-space-halfunit);
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
          
            .home-content-container {
              width: 949px;
              height: 341px;
              margin-bottom: 42px;
              padding-right: 0px;
            }
            .home-text04 {
              width: auto;
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
            
            
            .home-image-container {
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
