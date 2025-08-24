import React from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Projects from './section/Projects'
import Contact from './section/Contact'
import Experience from './section/Experience';
import Footer from './section/Footer';
import Testimonial from './section/Testimonial';

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
        <Navbar />
        <Hero/>
        <About/>
        {/* <Projects/> */}
        {/* <Experience/> */}
        {/* <Testimonial/> */}
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App