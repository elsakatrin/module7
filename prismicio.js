import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'
import * as prismicNext from '@prismicio/next'
import sm from './sm.json'

export const elsakatrin = prismic.getRepositoryName(sm.apiEndpoint)

//Routes trough ur pages
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