import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/layout/header'
import { Provider } from 'react-redux'
import { store } from '../components/redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Header>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Header>
  )
}

export default MyApp
