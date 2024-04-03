import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
        <title>Linkedin</title>
        <meta name='description' content='Linkedin clone, made using Next.js' />
        <link rel='icon' href='/favicon.ico' />
    </Head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
