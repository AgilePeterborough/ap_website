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
          <meta property="og:title" content="Agile Peterborough group homepage"/>
        </Head>
        <Navbar></Navbar>
        <main className="home-main">
          <Hero
          imageURL="highres_226269472-1200w.jpeg"
          header='A growing network of motivated technology businesses and professionals in Peterborough.'
          subtext='true'
          ></Hero>
          
          <div className="home-section-three section-container">
            <div className="home-max-width1 max-content-container">
              <h2 className="home-text04">
              Promoting technology best practice and inclusivity throughout Peterborough
              </h2>
              <div className="home-cards-container">
                <FeatureCard 
                  image_src="/playground_assets/beer-tap.png"
                  url="https://www.meetup.com/agile-peterborough/"
                  internal="false"
                ></FeatureCard>
                <FeatureCard
                  text="Hands-on workshops, learning in support of autodidacts."
                  text1="Learn more &gt;"
                  heading="Hands on"
                  image_src="/playground_assets/programming.png"
                ></FeatureCard>
                <FeatureCard
                  text="All of our talks and events are run by members of the community, we run events where possible based on demand "
                  text1="Learn more &gt;"
                  heading="Peer led"
                  image_src="/playground_assets/online-community.png"
                ></FeatureCard>
                <FeatureCard
                  text="Connecting proffessional engineers with education, through code clubs, presentations and talks in schools and Universities"
                  text1="See how &gt;"
                  heading="Supporting Education"
                  url="/education"
                  image_src="/playground_assets/mortarboard.png"
                ></FeatureCard>
              </div>
            </div>
          </div>
          <div className="home-section-two section-container">
          <Twopanel
             text="First run in 2013 Agile Peterborough is a volunteer run community focused
             on building, accelerating and amplifying  the growth of
             technology capability in and around the city. We run learning events and support the development of engineers in the local area."
             title1="Peterborough&apos;s learning technology"
             title2="&nbsp;Community"
             image_src="/playground_assets/herologo-1200w.png"
             imageRight="true"
          ></Twopanel>
          <Twopanel
             text="Learning is at the heart of what we do and we've been supporting schools and
             universities for over 10 years. Our members have run code clubs in primary
             schools, pairing sessions with under-graduates, helped organise hackathons, mock interviews and open days and we
             continue to work closely with academic organisations
             across the region. We've been around long enough to count some of the talented youngsters of
             our early schools engagement as now adult engineers and
             community contributors at Agile Peterborough"
             title1="Supporting"
             title2="Education"
             image_src="/playground_assets/aru.jpg"
          ></Twopanel>
          <Twopanel
             text="The Brewery Tap is one of Peterborough's finest public houses. Agile on Tap is a event that has been run from the back room of the
             Brewery Tap since 2013. A boutique tech event that
              has hosted some of the tech world's most reknowned speakers. Topics can range from technical
             &apos;how-tos&apos; and case studies to Product Strategy and
             Team leadership with formats varying from talks to open
             discussions and fishbowl discussions."
             title1="Agile-on-"
             title2="Tap"
             imageRight="true"
             image_src="/playground_assets/speaker1.jpg"
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
              <div className="home-cards-container1">
                <GridCard image_src="/playground_assets/goal.png"></GridCard>
                <GridCard
                  text="Follow your friends"
                  text1="Make new friends or meet old ones our events are a great place to create opportunity for debate"
                  image_src="/playground_assets/friends.png"
                ></GridCard>
                <GridCard
                  text="Get independant feedback"
                  text1="Pick up new skills, get feedback on your internal processes and improve in your career and at work"
                  image_src="/playground_assets/good-review.png"
                ></GridCard>
                <GridCard
                  text="Grow and learn"
                  text1="Learn and discover new ideas, technology and concepts, share your thoughts and questions and uncover new knowledge"
                  image_src="/playground_assets/knowledge.png"
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
              display: grid;
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
              display: grid;
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
