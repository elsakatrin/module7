import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicLink } from '@prismicio/react';
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
      
    {
  slice?.items?.map((item, i) =>
    <PrismicLink  field={item.navlink}>My Link</PrismicLink>
      )
    }




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