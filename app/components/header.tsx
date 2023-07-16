import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <section id="nav_section" className="bg-white flex flex-row justify-center">
    <Image 
      className="color-changing-svg"
      src="/valorant_small_logo.svg"
      alt="V"
      width={100} 
      height={100} 
    />
    <Image 
      className="color-changing-svg"
      src="/Valorant_logo.svg"
      alt="Valorant"
      width={300} 
      height={300} 
    />
</section>
  )
}
