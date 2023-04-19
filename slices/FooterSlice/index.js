import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import styles from './../../styles/Footer/footer.module.css'
import Imgix from 'react-imgix'
import { useEffect } from 'react'
import Aos  from 'aos' 
import "aos/dist/aos.css"
/**
 * @typedef {import("@prismicio/client").Content.FooterSliceSlice} FooterSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterSliceSlice>} FooterSliceProps
 * @param { FooterSliceProps }
 */
const FooterSlice = ({ slice }) => (

  useEffect(() => {
    Aos.init({duration: 1000}); //Initialize Aos, It gives a gobal animation for everything you want to animate - 
  }, [])  ,

  <section className={styles.contentwrapper} data-aos="fade" >
    <span className="title"  id="contactsection">
      <title>Elsa Katrín Ljósmyndari</title>
    </span>

  {/* Text over the footer image - CTA text */}
  <div className={styles.textwrapper}>
    <div className={styles.cta}>
      <PrismicRichText field={slice.primary.title} />
    </div>
    <div className={styles.email}>
      <PrismicRichText field={slice.primary.description} />
    </div>
  </div>
  {/* Overlay color and image */}
  <div className={styles.overlay}> 
    <div className={styles.footerimg}>
    <Imgix 
        src={slice.primary.footerimage.url} 
        srcset={slice.primary.footerimage.url} 
        alt={slice.primary.footerimage.alt}
        sizes="(max-width: 76em) 95vw,  (max-width: 64em) 90vw, 1300px"
        //  sizes='(min-width: 63.75em ) 70em, (min-width: 48em ) 53em, (min-width: 29em ) 38em,  (min-width: 23em ) 20em,'
        imgixParams={{ 
          q: 100, 
          usm: 12,
          auto: 'format', 
          fm: 'jpg', 
          cs: 'srgb',
          ar: '16:7',
          fit: 'crop',
          }}/>

    </div>
  </div>
</section>
)

export default FooterSlice