import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicLink } from '@prismicio/react'
import { linkResolver } from '@/prismicio'
import styles from './../../styles/Albums/albums.module.css'
import Imgix from 'react-imgix'
import Aos  from 'aos' 
import "aos/dist/aos.css"


/**
 * @typedef {import("@prismicio/client").Content.AlbumsSlice} AlbumsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AlbumsSlice>} AlbumsProps
 * @param { AlbumsProps }
 */


const Albums = ({ slice }) => (

  <section className={styles.contentwrapper}  id="albumsection" data-aos="fade" > 
    <span className="title">
      <title>Elsa Katrín Ljósmyndari</title>
    </span>

    {/* Text for albums on homepage */}
    <div className={styles.title} >
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
    <div className={styles.maincontainer}>
    <div className={styles.albumcontainer}>
      {slice?.items?.map((item, i) =>
          <PrismicLink 
            key={i} 
            href={item.pagelink.uid}>
            <div className={styles.albumimg}>
             <Imgix
                key={i}
                src={item.album.url} 
                alt={item.album.alt}
                loading="lazy"
                sizes="(max-width: 38em) 80vw, 400px"
                //Overwriting default Imgix behaviour
                imgixParams={{ 
                  q: 100, //quality, is automatically is set to 45 / only works for lossy formats like jpg and avif
                  usm: 12, //Give the image a bit sharpness after they lost some in the compression 
                  fit: 'crop', //Crop the image into the h+w or aspect ratio 
                  auto: 'format', //imgix deternmines if the image can be served by a better format, the process is called automatic content negotiation. Logic will attempt to serve images in AVIF format when supported, if not then WebP, if that's not supported then jpg
                  fm: 'jpg', //When AVIF and WebP is not supported our fallback is jpg
                  cs: 'srgb', // When the image is compressed the colorspace is removed. I added sRGB in here.
                  ar: '0.97:1' //Aspect ratio of 400x411
                }}/> 
              <div className={styles.albumoverlay}>
                <div className={styles.overlaytxt}>
                  <PrismicRichText 
                  field={item.overlaytext}/>
              </div>
            </div>
          </div>
          </PrismicLink> 
            )
          }  
          </div>
      </div>
      
  </section>
)

export default Albums  
