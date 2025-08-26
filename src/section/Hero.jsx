import HeroText from '../components/HeroText'
import ParallexBackground from '../components/ParallexBackground'
import Astronaut from '../components/Astronaut'
import {Canvas,useFrame} from '@react-three/fiber'
import { Float, OrbitControls, DragControls} from '@react-three/drei'
import {useMediaQuery} from 'react-responsive';
import { easing } from "maath";
import { Suspense , useRef} from 'react'
import Loader from '../components/Loader'

const Hero = () => {
  const isMobile=useMediaQuery({maxWidth:853})
  return (
    <section className='flex-items items-start justify-center md:items-start min-h-screen overflow-hidden' id='hero'>
      <HeroText />
      <ParallexBackground />
      <figure className='absolute inset-0 '
      style={{ width: '100vw', height: '100vh'}}>
        <Canvas camera={{position:[0,1,3]}}>
        <Suspense fallback={<Loader/>}> 
        <Float> 
          <Astronaut scale={isMobile&&0.23} position={isMobile&&[0,-1.5,0]}/>
        </Float>
          {/* <OrbitControls /> */}
          <Rig/>
        </Suspense>
        </Canvas>
      </figure>
    </section>
  )
}

function Rig(){
  return useFrame((state,delta)=>{
    easing.damp3(
      state.camera.position,
      [state.mouse.x/10,1+state.mouse.y/10,3],
      0.5,
      delta
    )
  })
}

export default Hero