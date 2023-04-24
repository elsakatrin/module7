import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import styles from './../../styles/Gallery/gallery.module.css'
import { PrismicLink } from '@prismicio/react'
import backicon from './../../public/caret-left-thin.svg'
import Imgix from 'react-imgix'

import { useRouter } from "next/router"



/**
 * @typedef {import("@prismicio/client").Content.PhotoGallerySliceSlice} PhotoGallerySliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PhotoGallerySliceSlice>} PhotoGallerySliceProps
 * @param { PhotoGallerySliceProps }
 */


const PhotoGallerySlice = ({ slice }) => {
  // Using Next Router for back button on the bottom of the page
  const router = useRouter()
  console.log(slice)
return(
  <section className={styles.contentwrapper}>
       <span className="title"></span>
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
            alert("Photo not valid. Check your prismic CMS. \n Hint: Field in Primsic can not be empty.")
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
              loading="lazy"
              alt={item.photos.alt} 
              className={styles.galleryimg}
              sizes="
              (min-width: 1280px) 245px 3x, 
              (min-width: 1024px) 190px 2x, 
              (min-width: 776px) 180px 1x, 
              (min-width: 640px) 40vw, 40vw 1x"
              imgixParams={{ 
                auto: 'format', 
                q: 78,
                usm: 12, 
                usmrad:'3',
                cs: 'srgb' ,
                fit:'max', //Max so the images never extend their original size
                fit: 'crop',
              }}/> 
            )})}
      </div>
  

      {/* Back button with Next router */}
        <button               
        className={styles.backbtn}
        onClick={() => router.back()}>
         <img 
            className={styles.backicon}
            alt='Go back'
            src='caret-left-thin.svg'
          />
        </button>
  </section>
)}

export default PhotoGallerySlice