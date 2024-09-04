import Footer from './footer/Footer'
import Header from './header/Header'
 
export default function Layout({ children }) {
  return (
    <div className='w-full'>
      <Header />
      <main className='w-full md:max-w-7xl mx-auto'>{children}</main>
      <Footer />
    </div>
  )
}