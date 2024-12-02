import Image from 'next/image'
import React from 'react'

export default function AuthNavBar() {
  return (
 <nav className='absolute top-10 left-10'>
    <Image src={'/logo.svg'} alt='logo' width={90} height={90} />
 </nav>
  )
}
