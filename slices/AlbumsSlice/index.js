import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
/**
 * @typedef {import("@prismicio/client").Content.AlbumsSlice} AlbumsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AlbumsSlice>} AlbumsProps
 * @param { AlbumsProps }
 */
const Albums = ({ slice }) => (
  <section>
    <span className="title">
      <title>Elsa Katrín Ljósmyndari</title>
    </span>
    {/* <Head>
      <title>Elsa Katrín ljósmyndari</title>
    </Head> */}
    <div>
    <PrismicRichText field={slice.primary.title} />
    <PrismicRichText field={slice.primary.description} />

    {
  slice?.items?.map((item, i) =>
    <PrismicNextImage field={item.album} 
    alt=""
    width={400} 
    height={411}
    q={100}
    imgixParams={{ q: 100, sharp: 10, fit: 'clamp' }}/> 
      )
    } 

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

export default Albums