import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import styles from './../../styles/About/about.module.css'
/**
 * @typedef {import("@prismicio/client").Content.AboutSliceSlice} AboutSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutSliceSlice>} AboutSliceProps
 * @param { AboutSliceProps }
 */


const AboutSlice = ({ slice }) => (
  <section className={styles.contentwrapper}>
    <span className="title">
      <title>Elsa Katrín Ljósmyndari</title>
    </span>
    <div>
      <div className={styles.title}>
        <PrismicRichText field={slice.primary.title} />
      </div>

      <div className={styles.aboutwrapper}>
        <div className={styles.aboutimg}> 
          <PrismicNextImage field={slice.primary.aboutimg} 
            alt=""
            width={300} 
            imgixParams={{ 
              q: 100, //quality, is automatically is set to 45 / only works for lossy formats like jpg and avif
              sharp: 10, //Give the image a bit sharpness after they lost some in the compression 
              auto: 'format', //imgix deternmines if the image can be served by a better format, the process is called automatic content negotiation. Logic will attempt to serve images in AVIF format when supported, if not then WebP, if that's not supported then jpg
              fm: 'jpg', //When AVIF and WebP is not supported our fallback is jpg
              cs: 'srgb' // When the image is compressed the colorspace is removed. I added sRGB in here.
            }}/>
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
    </div>

  </section>
)

export default AboutSlice