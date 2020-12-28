import Head from 'next/head'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import "tailwindcss/tailwind.css";


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
