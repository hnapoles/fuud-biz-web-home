import Head from 'next/head'
import Footer from '../components/footer'
import Nav from '../components/nav'
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
