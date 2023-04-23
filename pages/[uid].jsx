import * as prismicH from '@prismicio/helpers'
import { SliceZone } from '@prismicio/react'
import { createClient, linkResolver } from '../prismicio'
import { components } from '@/slices/index'
import { Navigation } from '@/components/Navigation'
import Copyright from '@/components/Copyright'
import { PrismicRichText } from '@prismicio/react'

 
const Page = ({ page, navigation, settings }) => {
  console.log(page)
  return (
  <div>
    <Navigation navigation={navigation} /> 
    <SliceZone slices={page.data.slices} components={components} />
  {    console.log(navigation)} 
  <Copyright />
  </div>
  )
}
 
export default Page
 
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  const navigation = await client.getByUID('navbar', 'navbar')
  const page = await client.getByUID('page', params.uid)
    console.log(page.data.uid)
  return {
    props: {
      navigation,
      page
    }
  }
}

export async function getStaticPaths() {
  const client = createClient()
  const pages = await client.getAllByType('page')
  return {
    paths: pages.map(page => prismicH.asLink(page, linkResolver)),
    fallback: false
  }
}