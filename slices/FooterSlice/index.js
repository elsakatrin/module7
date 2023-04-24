import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import styles from './../../styles/Footer/footer.module.css'
import Imgix from 'react-imgix'
import Aos  from 'aos' 
import "aos/dist/aos.css"
/**
 * @typedef {import("@prismicio/client").Content.FooterSliceSlice} FooterSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterSliceSlice>} FooterSliceProps
 * @param { FooterSliceProps }
 */
const FooterSlice = ({ slice }) => (

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