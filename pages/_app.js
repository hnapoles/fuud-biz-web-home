import Head from 'next/head'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import "tailwindcss/tailwind.css";

import { Provider } from 'next-auth/client'


function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Nav/>
        <Component {...pageProps} />
      <Footer/>
    </Provider>
  )
}

export default MyApp
