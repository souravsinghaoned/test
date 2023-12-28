import '@/styles/globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import '@/styles/layout.css'

export default function App({ Component, pageProps }) {

  console.log(Component.getLayout)
  console.log(pageProps)
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps}/>)
  }
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
