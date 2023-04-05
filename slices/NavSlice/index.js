import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicLink } from '@prismicio/react';
import Link from 'next/link';
import { linkResolver } from '@/prismicio';

/**
 * @typedef {import("@prismicio/client").Content.NavSliceSlice} NavSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavSliceSlice>} NavSliceProps
 * @param { NavSliceProps }
 */
const NavSlice = ({ slice }) => (
  <section>
    <span className="title">
      <title>Elsa Katrín Ljósmyndari</title>
      </span>


    <div>
    <PrismicNextImage field={slice.primary.logo} 
          alt=""
          width={303} 
          height={169}
          imgixParams={{ vib: 40 }}/>
  <span>  
  <PrismicLink href={slice.primary.navlink1}>Albúm</PrismicLink>


  {/* <PrismicLink  field={slice.primary.navlink2}>Um mig</PrismicLink>
  <PrismicLink  field={slice.primary.navlink3}>Hafa Samband</PrismicLink>
  <PrismicLink  field={slice.primary.navlink4}>Verðskrá</PrismicLink> */}
 
 
    {/* /* {
  slice?.items?.map((item, i) =>
    <PrismicLink key={item.uid} href={item.navlink} linkResolver={linkResolver}>My Link</PrismicLink>
      )
    } */ }
</span>  



    </div>
 

    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
    `}</style>
  </section>
)

export default NavSlice