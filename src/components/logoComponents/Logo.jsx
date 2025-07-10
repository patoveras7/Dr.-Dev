import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    
        <Image
        src="/images/logoFigma.png"
        alt="logoFigma"
        width={100}
        height={100}
        className='md:w-[150px] md:h-[70px] lg:w-[170px] lg:h-[80px]'
        />
  
  )
}

export default Logo