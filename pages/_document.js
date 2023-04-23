import { Html, Head, Main, NextScript } from 'next/document'
import { PrismicRichText } from '@prismicio/react'


export default function Document({page}) {
  return (
    <Html lang="en">
      <Head >
      <meta
          name="viewport"
          content="width=device-width, minimum-scale=1, initial-scale=1"
        />
  <title>Elsa Katrín Ljósmyndari</title>
      {/* <title>
    <PrismicRichText field={page.data.title} />
    </title> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

// export async function getStaticProps({ params, previewData }) {
//   const client = createClient({ previewData })
//   const page = await client.getByUID('page', params.uid)

//   return {
//     props: {
//       page
//     }
//   }
// }