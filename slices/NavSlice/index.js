import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicLink } from '@prismicio/react';
import { linkResolver } from '@/prismicio';
import styles from './../../styles/Nav/nav.module.css'

/**
 * @typedef {import("@prismicio/client").Content.NavSliceSlice} NavSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavSliceSlice>} NavSliceProps
 * @param { NavSliceProps }
 */

const NavSlice = ({ slice }) => (
 
  <section className={styles.contentwrapper}>

    <span className="title">
      <title>Elsa Katrín Ljósmyndari</title>
    </span>

    <div>
      {/* Logo for navbar - links back to homepage */}
      <div className={styles.logo}> 
        <PrismicLink  href="./">
          <PrismicNextImage field={slice.primary.logo} 
            alt=""
            width={303} 
            height={169}
            imgixParams={{  
            q: 100,
            auto: 'format' }}/>
          </PrismicLink>
      </div>
    {/* Navbar links */}
    {/* Should have made a navbar custom type in the beginnig */}
      <div className={styles.navlinks}>  
      {/* Linkar eru ekki active */}
        <PrismicLink href={slice.primary.navlink1.uid}>Albúm</PrismicLink>
        <PrismicLink href={slice.primary.navlink2.uid}>Albúm</PrismicLink>
        <PrismicLink href={slice.primary.navlink3.uid}>Albúm</PrismicLink>
        <PrismicLink href={slice.primary.navlink4.uid}>Albúm</PrismicLink>
      </div>  
    </div>
  </section>
)
export default NavSlice