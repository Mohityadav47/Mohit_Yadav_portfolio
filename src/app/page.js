import Image from 'next/image'
import styles from './page.module.css'
import Nav from './Components/Nav/Nav'
import Hero from './Components/Nav/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'

export default function Home() {
  return (
    <div className='app'>

<Nav/>

<Hero/>
<About/>
<Services/>
<Portfolio/>
<Testimonial/>
<Contact/>
    </div>
  )
}
