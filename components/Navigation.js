import { PrismicLink, PrismicText } from '@prismicio/react'
import Imgix from 'react-imgix'
import styles from './navigation.module.css'
import Link from 'next/link'
import { React ,useEffect, useState } from 'react'

 

export function Navigation({ navigation }) {
    console.log(navigation)
  const data = navigation.data

  //Making anchor links (for homepage) not visible on other pages
  const [isLandingPage, setIsLandingPage] = useState(false);
  useEffect(() => {
    setIsLandingPage(window.location.pathname === '/');
  }, []);

//Smooth scroll function for navbar links
  const scrollDown = (e) => {
    try{
    window.scrollTo({
      top: document.getElementById(e.target.attributes.href.value).offsetTop,
        behavior: "smooth" ,
    })
    console.log(document.getElementById(e.target.attributes.href.value).offsetTop) //This calculates the distance from a link to a section (when you push a link) and brings you to the top of that section
  } catch(error){console.error(error);}
};

  return (
    <nav className={styles.contentwrapper} id="home">
      <ul> 
        {navigation.data.slices.map((slice) => {
            console.log(slice)
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
                    sizes='(min-width: 63.75em ) 18.7em, (min-width: 48em )14em, (min-width: 29em ) 10em,'
                    imgixParams={{  
                      fit:'clip',
                      q: 70,
                      auto: 'format' }}/> 
                </PrismicLink>
              </div>

              <div className={styles.navlinks}>
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
                      key={i}
                      field={item.link}>link</PrismicLink>
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