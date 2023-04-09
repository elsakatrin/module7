import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.SubTextSlice} SubTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SubTextSlice>} SubTextProps
 * @param { SubTextProps }
 */
const SubText = ({ slice }) => (
  <section>
    <span className="title">
      {
        slice.primary.title ?
        <PrismicRichText field={slice.primary.title}/>
        : <h2>Template slice, update me!</h2>
      }
    </span>
    {
      slice.primary.description ?
      <PrismicRichText field={slice.primary.description}/>
      : <p>start by editing this slice from inside Slice Machine!</p>
    }
    
  </section>
)

export default SubText