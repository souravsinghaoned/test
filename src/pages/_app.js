import '@/styles/globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import '@/styles/layout.css'
import { SessionProvider } from "next-auth/react";


export default function App({ Component, pageProps }) {

  console.log(Component.getLayout)
  console.log(pageProps)
  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <Component {...pageProps} />
      </>
    )
  }
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  )
}
