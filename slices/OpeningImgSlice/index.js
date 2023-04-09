import React from 'react'
import { PrismicRichText } from '@prismicio/react' 
import { PrismicNextImage } from '@prismicio/next'
import styles from './../../styles/Openingimg/openingimg.module.css'

/**
 * @typedef {import("@prismicio/client").Content.OpeningImgSlice} OpeningImgSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OpeningImgSlice>} OpeningImgProps
 * @param { OpeningImgProps }
 */
const OpeningImg = ({ slice }) => (
  <section>
    <span className="title">
        <title>Elsa Katrín Ljósmyndari</title>
    </span>
    {/* <Head>
      <title> Elsa Katrín Ljósmyndari </title>
    </Head> */}

    <div>
        <PrismicNextImage field={slice.primary.openingimg} 
          className={styles.bannerimg}
          alt=""
          width={1239} 
          height={622}
          imgixParams={{ 
            q: 100, //quality, is automatically is set to 45 / only works for lossy formats like jpg and avif
            sharp: 10, //Give the image a bit sharpness after they lost some in the compression 
            auto: 'format', //imgix deternmines if the image can be served by a better format, the process is called automatic content negotiation. Logic will attempt to serve images in AVIF format when supported, if not then WebP, if that's not supported then jpg
            fm: 'jpg', //When AVIF and WebP is not supported our fallback is jpg
            cs: 'srgb' // When the image is compressed the colorspace is removed. I added sRGB in here.
          }}/>

        </div>
    {/* <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
    `}</style> */}
  </section>
)

export default OpeningImg