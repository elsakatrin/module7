import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import styles from './../../styles/Gallery/gallery.module.css'
import Image from 'next/image'
import { PrismicLink } from '@prismicio/react'
import backicon from './../../public/caret-left-thin.svg'
/**
 * @typedef {import("@prismicio/client").Content.PhotoGallerySliceSlice} PhotoGallerySliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PhotoGallerySliceSlice>} PhotoGallerySliceProps
 * @param { PhotoGallerySliceProps }
 */


const PhotoGallerySlice = ({ slice }) => (
  <section className={styles.contentwrapper}>
    <span className="title">
    </span>

      {/* Text on gallery slices */}
      <div className={styles.textwrapper}>
        <div className={styles.title}>
          <PrismicRichText field={slice.primary.title} />
        </div>
        <div className={styles.description}>
          <PrismicRichText field={slice.primary.description} />
        </div>
      </div>

      {/* Photos on gallery slices */}
      <div className={styles.gallery}>
          {
        slice?.items?.map((item, i) =>
          <PrismicNextImage field={item.photos} 
            key={i}
            alt=""
            width={400}
            className={styles.galleryimg}
            imgixParams={{ 
              q: 100, //quality, is automatically is set to 45 / only works for lossy formats like jpg and avif
              sharp: 10, //Give the image a bit sharpness after they lost some in the compression 
              auto: 'format', //imgix deternmines if the image can be served by a better format, the process is called automatic content negotiation. Logic will attempt to serve images in AVIF format when supported, if not then WebP, if that's not supported then jpg
              fm: 'jpg', //When AVIF and WebP is not supported our fallback is jpg
              cs: 'srgb' // When the image is compressed the colorspace is removed. I added sRGB in here.
            }}/> 
        )
      }
      </div>

      {/* Back icon for gallery inside secon album (like series) */}
      <div className={styles.backicon}>
        <PrismicLink  href={slice.primary.backlink.uid}>
              <Image 
                alt='Go back'
                src={backicon}
                width={50}
                height={50}
              />
        </PrismicLink>

    </div>
  </section>
)

export default PhotoGallerySlice