import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicLink } from '@prismicio/react';
import Link from 'next/link';
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
      <div className={styles.logo}> 
    <PrismicNextImage field={slice.primary.logo} 
          alt=""
          width={303} 
          height={169}
          imgixParams={{  
            q: 100}}/>
      </div>

  <div className={styles.navlinks}>  
  <PrismicLink href={slice.primary.navlink1.uid}>Albúm</PrismicLink>
 {console.log(slice.primary.navlink1.uid)}


  {/* <PrismicLink  field={slice.primary.navlink2}>Um mig</PrismicLink>
  <PrismicLink  field={slice.primary.navlink3}>Hafa Samband</PrismicLink>
  <PrismicLink  field={slice.primary.navlink4}>Verðskrá</PrismicLink> */}
 
 
    {/* /* {
  slice?.items?.map((item, i) =>
    <PrismicLink key={item.uid} href={item.navlink} linkResolver={linkResolver}>My Link</PrismicLink>
      )
    } */ }
</div>  
    </div>
  </section>
)
export default NavSlice