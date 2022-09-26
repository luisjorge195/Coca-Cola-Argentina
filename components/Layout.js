import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
const Layout = ({children}) => {
  return (
    <div>
        <Head>
            <title> Coca-Cola </title>
        </Head>
        <Header/>
            {children}
        <Footer/>
      
    </div>
  )
}

export default Layout
