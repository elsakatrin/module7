import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicLink } from '@prismicio/react'
import { linkResolver } from '@/prismicio'
import { useEffect, useState } from 'react'
import styles from './../../styles/Albums/albums.module.css'
import { motion, useScroll } from "framer-motion"

/**
 * @typedef {import("@prismicio/client").Content.AlbumsSlice} AlbumsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AlbumsSlice>} AlbumsProps
 * @param { AlbumsProps }
 */


const Albums = ({ slice }) => (

  <section className={styles.contentwrapper}>
    <span className="title">
      <title>Elsa Katrín Ljósmyndari</title>
    </span>

    {/* Text for albums on homepage */}
    <div className={styles.albumtxt} >
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.description} />
    </div>

    {/* Text for albums on other pages/other custom type pages */}
    <div className={styles.textwrapper}>
      <div className={styles.typetitle}>
        <PrismicRichText field={slice.primary.albumtypetitle} />
      </div>
        <div className={styles.typedescription}>
          <PrismicRichText field={slice.primary.albumtypedescription} />
        </div>
    </div>


    {/* Each album linked to a new page; Link to new place, the album image, overlay text */}
    {/* All fields are repeatable types so I only need to have one of each. They map function maps over how many of them are in the client repo*/}
    <div className={styles.albumcontainer}>
      {slice?.items?.map((item, i) =>
          <PrismicLink 
            key={i} 
            href={item.pagelink.uid}>
            <div className={styles.albumimg}>
              <PrismicNextImage 
                key={i}
                field={item.album} 
                alt=""
                width={400} 
                height={411}
                q={100}
                //Overwriting default Imgix behaviour
                imgixParams={{ 
                  q: 100, //quality, is automatically is set to 45 / only works for lossy formats like jpg and avif
                  sharp: 10, //Give the image a bit sharpness after they lost some in the compression 
                  // fit: 'crop', //This was supposed to work as a crop so I wouldn't have to resize the images inside prismic but it doesn't work and I can't figure out why 
                  // w:'400px', //W and H were supposed to work with the crop function
                  // h:'411px',
                  auto: 'format', //imgix deternmines if the image can be served by a better format, the process is called automatic content negotiation. Logic will attempt to serve images in AVIF format when supported, if not then WebP, if that's not supported then jpg
                  fm: 'jpg', //When AVIF and WebP is not supported our fallback is jpg
                  cs: 'srgb' // When the image is compressed the colorspace is removed. I added sRGB in here.
                }}/>
              <div className={styles.overlaytxt}>
                  <PrismicRichText field={item.overlaytext} />
              </div>
            </div>
          </PrismicLink> 
            )
          }  
      </div>
  </section>
)

export default Albums  
