import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../prismicio'
import { Josefin_Sans } from 'next/font/google'

const josefin_sans = Josefin_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      {/* Putting Josefin Sans as global font */}
      <style jsx global>{`
        html {
          font-family: ${josefin_sans.style.fontFamily};
        }
      `}</style>

      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  )
}

// Prismic link automatically resolves your external links, but next link can link between internal pages. 
// Here PrismicProvider is wrapping the app to condigure Prismic Link to use next link for internal links. internalLinkComponent is configured as a prop
//Now Prismic link will use the next link component for internal links