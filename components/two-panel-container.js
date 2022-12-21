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
                    <span className={styles['twopanel-header-highlight']}>{props.title2}</span>
                  </h1>
                  <span className={styles['home-text08']}>
                    <span className={styles['Content-Light']}>
                    {props.text}
                    </span>
                    <br></br>
                        <br></br>
                    <span className={styles['Content-Light']}>
                  {props.text2}
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
                  <br></br>
                        <br></br>
                  <span className={styles['Content-Light']}>
                  {props.text2}
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
            
      </>
    )
  }
}

export default Twopanel
