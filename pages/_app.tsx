import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/payload/header'

function MyApp({ Component, pageProps }: AppProps) {
  return <Header>
    <Component {...pageProps} />
  </Header>
}

export default MyApp
