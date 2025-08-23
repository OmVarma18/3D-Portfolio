import React from 'react'
import HeroText from '../components/HeroText'
import ParallexBackground from '../components/ParallexBackground'

const Hero = () => {
  return (
    <section className='flex-items items-start justify-center md:items-start min-h-screen overflow-hidden'>
      <HeroText />
      <ParallexBackground />
    </section>
  )
}

export default Hero