import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.FooterSliceSlice} FooterSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterSliceSlice>} FooterSliceProps
 * @param { FooterSliceProps }
 */
const FooterSlice = ({ slice }) => (
  <section>
    <span className="title">
      <title>Elsa Katrín Ljósmyndari</title>
    </span>
{/* <Head>
  <tite>Elsa Katrín Ljósmyndari</tite>
</Head> */}
<div>
<PrismicRichText field={slice.primary.title} />
<PrismicRichText field={slice.primary.description} />
<PrismicNextImage field={slice.primary.footerimage} 
    alt=""
    width={1239} 
    height={622}/>



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

export default FooterSlice