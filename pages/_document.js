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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

