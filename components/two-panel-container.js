import React from 'react'
import styles from './two-panel-container.module.css'
const Twopanel = (props) => {
  if(props.imageRight)  {
    return (
      <>
          <div className={styles['twopanel_maxwidth'] + ' ' + styles['max-content-container']}>
               



                <div className={styles['twopanel-content-container1']}>

                  <h1 className={styles['twopanel-header']}>
                    {props.title1}
                    <span className={styles['twopanel-header-highlight']}> {props.title2}</span>
                  </h1>
                  <span className={styles['home-text08']}>
                    <span className={styles['Content-Light']}>
                    {props.text}
                    </span>
                    <br className={styles['Content-Light']}></br>
                    <br className={styles['Content-Light']}></br>
                    <span className={styles['Content-Light']}>
                        
                        </span>
                        <br></br>
                        <br></br>
                        <br></br>
                  </span>
                </div>

                <div className={styles['home-image-container']}>
                  <img
                    alt="image"
                    src={props.image_src}
                    loading="lazy"
                    className={styles['home-image']}
                  />
                </div>


              </div>
           
      </>
    )
  }else {
    return (
      <>
         <div className={styles['twopanel_maxwidth'] + ' ' + styles['max-content-container']}>
         <div className={styles['home-image-container']}>
                  <img
                    alt="image"
                    src={props.image_src}
                    loading="lazy"
                    className={styles['home-image']}
                  />
                </div>

                <div className={styles['twopanel-content-container1']}>

                <h1 className={styles['twopanel-header']}>
                  {props.title1}
                  <span className={styles['twopanel-header-highlight']}> {props.title2}</span>
                </h1>
                <span className={styles['home-text08']}>
                  <span className={styles['Content-Light']}>
                  {props.text}
                  </span>
                  <br className={styles['Content-Light']}></br>
                  <br className={styles['Content-Light']}></br>
                  <span className={styles['Content-Light']}>
                      
                      </span>
                      <br></br>
                      <br></br>
                      <br></br>
                </span>
                </div>
            </div>
            <style>
              {`
                  .twopanel_maxwidth {
                    padding-top: var(--dl-space-space-fourunits);
                    flex-direction: row;
                    justify-content: flex-start;
                  }
  
                  .twopanel-content-container1 {
                    flex: 1;
                    display: flex;
                    max-width: 446px;
                    align-items: flex-start;
                    flex-direction: column;
                    justify-content: center;
                  }

                .home-image-container1 {
                  flex: 1;
                  align-self: stretch;
                  margin-right: var(--dl-space-space-oneandhalfunits);
                }

                .home-image {
                  width: 566px;
                  object-fit: cover;
                  margin-left: 85px;
                }
                .home-image {
                  max-width: 100%;
                  margin-left: 0px;
                }
                
                @media (max-width: 767px) {
                  .home-max-width3 {
                    width: auto;
                    flex-direction: column;
                  }
                  .home-image-container1 {
                    width: 100%;
                    margin-right: 0px;
                  }
                  .home-image {
                    margin-bottom: var(--dl-space-space-twounits);
                  }
                }

                @media (max-width: 479px) {
                  .home-max-width3 {
                    width: auto;
                  }
                  .home-image-container1 {
                    width: auto;
                  }
                  .home-image {
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
}

export default Twopanel
