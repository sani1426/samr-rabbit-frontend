import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
   <section className="">
    <Image src="@/public/images/hero-image.png" alt='hero-image' onLoad={blur} className='w-full h-[440px] md:h-[600px] lg:h-[750px] object-cover' />
   </section>
  )
}

export default Hero