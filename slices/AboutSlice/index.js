import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
/**
 * @typedef {import("@prismicio/client").Content.AboutSliceSlice} AboutSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutSliceSlice>} AboutSliceProps
 * @param { AboutSliceProps }
 */
const AboutSlice = ({ slice }) => (
  <section>
    <span className="title">
      <title>Elsa Katrín Ljósmyndari</title>
    </span>
    {/* <Head>  
      <title>Elsa Katrín ljósmyndari</title>
    </Head> */}

        <div>
        <PrismicRichText field={slice.primary.title} />
        <PrismicRichText field={slice.primary.aboutname} />
        <PrismicRichText field={slice.primary.description} />
        <PrismicNextImage field={slice.primary.aboutimg} 
          alt=""
          width={150} 
          height={200}
          imgixParams={{ vib: 40 }}/>

        </div>
  

    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
    `}</style>
  </section>
)

export default AboutSlice