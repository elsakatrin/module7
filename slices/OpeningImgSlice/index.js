import React from 'react'
import { PrismicRichText } from '@prismicio/react' 
import { PrismicNextImage } from '@prismicio/next'

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
        <PrismicRichText field={slice.primary.title} />
        <PrismicRichText field={slice.primary.aboutname} />
        <PrismicRichText field={slice.primary.description} />
        <PrismicNextImage field={slice.primary.openingimg} 
          alt=""
          width={1239} 
          height={622}
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

export default OpeningImg