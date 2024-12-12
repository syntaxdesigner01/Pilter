import { routeLinks } from '@/utils/routerLinks'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function AuthNavBar() {
  const router =useRouter()
  return (
 <nav className='absolute top-10 left-10'>
    <Image src={'/logo.svg'} alt='logo' width={70} height={70} onClick={()=> router.push(routeLinks.home)} /> 
 </nav>
  )
}
