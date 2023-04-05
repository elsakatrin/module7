import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'
import * as prismicNext from '@prismicio/next'
import sm from './sm.json'

export const elsakatrin = prismic.getRepositoryName(sm.apiEndpoint)

//Routes through pages
//I only have one single custom type, the homepage. Page is a repeatable page that returns based on the uid, which is called slug in the slice machine
export function linkResolver(doc) {
  switch (doc.type) {
    case 'homepage':
      return '/'
    case 'page':
      return `/${doc.uid}`
  }
}
 //Gets endpoint from sm.json
export const createClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, config)
 
  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req
  })
 
  return client
}