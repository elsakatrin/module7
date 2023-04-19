import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import styles from './../../styles/Gallery/gallery.module.css'
import Image from 'next/image'
import { PrismicLink } from '@prismicio/react'
import backicon from './../../public/caret-left-thin.svg'
import Imgix from 'react-imgix'
import { useState } from 'react'
import { useRouter } from "next/router"
import { Picture } from 'react-imgix'

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
              sizes="(max-width: 30em) 200px, 300px"
              imgixParams={{ 
                dpr:'2', // Device Pixel Ratio. Controls output density of the image. Default is 1.
                q: 100,
                usm: 12, 
                auto: 'format', 
                cs: 'srgb' ,
                fit:'max', //Never delivered bigger than it's actual size
                h: '31rem',
                w:'auto'
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

                {/* If I use this one I have to go into every page to specify what page I want to go back to - time consuming */}
    {/* href={slice.primary.backlink.uid}>  */}


  </section>
)}

export default PhotoGallerySlice