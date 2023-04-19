import { PrismicLink, PrismicText } from '@prismicio/react'
import Imgix from 'react-imgix'
import styles from './navigation.module.css'
import Link from 'next/link'
import { React ,useEffect, useState } from 'react'

 

export function Navigation({ navigation }) {
  const data = navigation.data

  //Making anchor links (for homepage) not visible on other pages
  const [isLandingPage, setIsLandingPage] = useState(false);
  useEffect(() => {
    setIsLandingPage(window.location.pathname === '/');
  }, []);

//Smooth scroll function for navbar links
  const scrollDown = (e) => {
    try{
    //This calculates the distance from a link to a section (when you push a link) and brings you to the top of that section - offsetTop finds where the section starts
    //The behavior controls how the scroll scrolls, I wanted it to scroll smoothly
    window.scrollTo({
      top: document.getElementById(e.target.attributes.href.value).offsetTop,
        behavior: "smooth" ,
    })
    console.log(document.getElementById(e.target.attributes.href.value).offsetTop) 
  } catch(error){console.error(error);} //Try and catch is there's an error with the scrolling - it doesn't crash the site but console logs the error
};

  return (
    <nav className={styles.contentwrapper}>
      <ul> 
        {navigation.data.slices.map((slice) => {
          return (
            //navigation item slice
              //The logo is clickable and sends you to homepage/refreshes
            <div key={slice.id} >
              <div className={styles.logo}>
                <PrismicLink  href="./"> 
                  <Imgix 
                  className={styles.logo}
                    src={slice.primary.logo.url} 
                    alt={slice.primary.logo.alt} 
                    sizes=' (min-width: 48em )18em, 200px'
                    imgixParams={{  
                      q: 70,
                      auto: 'format' }}/> 
                </PrismicLink>
              </div>
                {/* Navigation links - They're not from prismic because Prismic doesn't have in page anchor scroll so I decided to make my own */}
              <div className={styles.navlinks}>
              <div  
                        className={styles.link}
                      href="./" >
                      Heim
                    </div>
                    <div 
                    className={styles.link}
                      href='albumsection' 
                      onClick={scrollDown}  
                      style={{ display: isLandingPage ? 'block' : 'none' }}>
                      Albúm
                    </div>
                    <div  
                        className={styles.link}
                      href="aboutsection" 
                      onClick={scrollDown}
                      style={{ display: isLandingPage ? 'block' : 'none' }}>
                      Um mig
                    </div>
                    <div  
                        className={styles.link}
                      href="contactsection" 
                      onClick={scrollDown}
                      style={{ display: isLandingPage ? 'block' : 'none' }}>
                      Hafa samband
                    </div>
                      

                      {/* This is a repeatable link field - it's there if the client wants to add more links  */}
                                        {
                    slice?.items?.map((item, i) =>
                      <PrismicLink 
                      className={styles.replink}
                      key={i}
                      href={item.link.uid}>Afkomendur Borgarfjarðar</PrismicLink>
                    )
                  } 
            </div>
          </div>
          )
        })}
      </ul>
      
    </nav>
  )
}