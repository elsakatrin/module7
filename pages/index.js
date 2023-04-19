import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices'
import { Navigation } from '@/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import BackToTopButton from '@/components/BackToTop'
import Copyright from '@/components/Copyright'


const Page = ({ page, navigation }) => {
  const [showIcon, setShowIcon] = useState(false);
 
  return (
  <div>
    {/* Here I'm putting the navbar into every page and rendering relevant slices from the slice machine. The Icon/Image helps the user scroll back on top */}
      <Navigation navigation={navigation} />  
        <SliceZone slices={page.data.slices} components={components} />
          <BackToTopButton/>
          <Copyright/>
  </div>
  )
}

 
export default Page
 
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const page = await client.getSingle('homepage')
  const navigation = await client.getSingle('navbar')

  return {
    props: {
      navigation,
      page,
      
    }
  
  }

}