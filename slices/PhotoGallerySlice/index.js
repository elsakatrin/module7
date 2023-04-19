import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import styles from './../../styles/Gallery/gallery.module.css'
import Image from 'next/image'
import { PrismicLink } from '@prismicio/react'
import backicon from './../../public/caret-left-thin.svg'
import Imgix from 'react-imgix'
import Copyright from '@/components/Copyright'
/**
 * @typedef {import("@prismicio/client").Content.PhotoGallerySliceSlice} PhotoGallerySliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PhotoGallerySliceSlice>} PhotoGallerySliceProps
 * @param { PhotoGallerySliceProps }
 */

const PhotoGallerySlice = ({ slice }) => (


  <section className={styles.contentwrapper}>
       <span className="title">
      <title>Elsa Katrín Ljósmyndari</title>
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
        slice?.items?.map((item, i) =>{
          // Doing try and catch for errors so it doesn't crash the website but it sends an alert instead 
          // There's an error that comes up 'cannot read properties of split' that is an internal prismic error that comes up if there's an empty field inside prismic client gallery, there's also an error where images that have space in their name, don't load
          if (!item.photos.url){
            try{
            alert("Photo not valid. Check your prismic CMS. \n Hint: Field in Primsic can not be empty. Photo URL can not be  ")
            }
            catch(error) {console.log(error)}
            return(
              <div></div>
            )
          }
          
          return( 
            <Imgix
              src={item.photos.url} 
              key={i}
              alt={item.photos.alt} 
              className={styles.galleryimg}
              sizes="(max-width: 30em) 30vw, 400px"
              imgixParams={{ 
                q: 90,
                usm: 12,
                auto: 'format', 
                cs: 'srgb' 
              }}/> 
            )})}
      </div>

      {/* Back icon for gallery inside second album (like series) */}
      <div className={styles.backicon}>
        <a
        href="/series" >
              <Image 
              className={styles.backicon}
                alt='Go back'
                src={backicon}
                width={50}
                height={50}
              />
        </a>
    </div>
    {/* href={slice.primary.backlink.uid}> */}
  </section>
)

export default PhotoGallerySlice