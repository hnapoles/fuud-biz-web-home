import Head from 'next/head'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import "tailwindcss/tailwind.css";

import { Provider as AuthProvider } from 'next-auth/client'


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
      <Nav/>
        <Component {...pageProps} />
      <Footer/>
    </AuthProvider>
  )
}

export default MyApp
