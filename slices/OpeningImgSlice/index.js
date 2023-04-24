import React from 'react'
import styles from './../../styles/Openingimg/openingimg.module.css'
import Imgix from 'react-imgix'
/**
 * @typedef {import("@prismicio/client").Content.OpeningImgSlice} OpeningImgSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OpeningImgSlice>} OpeningImgProps
 * @param { OpeningImgProps }
 */
const OpeningImg = ({ slice }) => (
  <section className={styles.contentwrapper}>
    <span className="title">
        <title>Elsa Katrín Ljósmyndari</title>
    </span>
    <div>
      <Imgix 
      src={slice.primary.openingimg.url} 
      srcset={slice.primary.openingimg.url} 
        className={styles.bannerimg}
        alt={slice.primary.openingimg.alt}
          sizes="  (max-width: 64em) 90vw, 1300px"
          priority={true} //The image was concidered "Largest Contentful Paint" which means that it's big and takes longer to load. Because it's the first image it was recommended to have as a priority
          imgixParams={{ 
            q: 100, 
            usm: 10, 
            auto: 'format',
            fm: 'jpg', 
            cs: 'srgb', 
            ar: '16:7',
            // ar: '2:1',
            fit: 'crop',
          }}/>     
    </div>
  </section>
)

export default OpeningImg

