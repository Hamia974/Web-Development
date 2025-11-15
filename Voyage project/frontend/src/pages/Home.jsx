import {React} from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SearchSection from '../components/SearchSection'
import Destinations from '../components/Destinations'
import WhyChoose from '../components/WhyChoose'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div className='bg-[#474769bb] '>
      <Navbar/>
      <Hero/>
      <SearchSection/>
      <Destinations/>
      <WhyChoose/>
      <Services/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home

