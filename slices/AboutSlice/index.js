import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import styles from './../../styles/About/about.module.css'
import Imgix from 'react-imgix'
import { useEffect } from 'react'
import Aos  from 'aos' 
import "aos/dist/aos.css"

/**
 * @typedef {import("@prismicio/client").Content.AboutSliceSlice} AboutSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutSliceSlice>} AboutSliceProps
 * @param { AboutSliceProps }
 */


const AboutSlice = ({ slice }) => (

//Animation 
useEffect(() => {
  Aos.init({duration: 1000}); //Initialize Aos, It gives a gobal animation for everything you want to animate - 
}, [])  ,

  <section className={styles.contentwrapper} id="aboutsection" data-aos="fade" >
    <span className="title">
      <title>Elsa Katrín Ljósmyndari</title>
    </span>
    <div>
      <div className={styles.title}>
        <PrismicRichText field={slice.primary.title} />
      </div>

      <div className={styles.aboutwrapper}>
     <div>
          <Imgix 
          className={styles.aboutimg}
          src={slice.primary.aboutimg.url} 
          srcset={slice.primary.aboutimg.url}
            alt={slice.primary.aboutimg.alt}
            sizes="(max-width: 56em) 50vw, 380px"
            imgixParams={{ 
              q: 100,
              uam: 10, 
              auto: 'format', 
              fm: 'jpg',
              cs: 'srgb', 
              ar: '5:7',
              fit:'crop',
            }}/>
            </div>

          <div className={styles.aboutxtwrapper}> 
              <div className={styles.name}> 
                <PrismicRichText field={slice.primary.aboutname} />
              </div>
              <div className={styles.abouttxt}> 
                <PrismicRichText field={slice.primary.description} />
              </div>
          </div>
        
      </div>
    </div>

  </section>
)

export default AboutSlice