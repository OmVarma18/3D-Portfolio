import React from 'react'

const ParallexBackground = () => {
  return (
    <section className='absolute inset-0 bg-black/40'>
        <div className='relative h-screen overflow-y-hidden'>
            <div className='absolute inset-0 w-full h-screen -z-50'
            style={{
              backgroundImage: "url('/assets/sky.jpg')",
            }}/>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    </section>
  )
}

export default ParallexBackground