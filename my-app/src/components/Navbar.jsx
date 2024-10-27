"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Logo from '../../public/logo.png'
import React from 'react'

const Navbar = () => {

  const router = useRouter()
  
  return (
    <div className="w-full h-20 px-5 text-white">

      <div className="w-full h-full flex justify-between items-center">

        <div className="flex items-center w-20">
          <Image src={Logo} alt='Logo' onClick={()=> router.push('/')} className='w-full' />
        </div>

        <div className='middle flex gap-3 sm:gap-4 sm:text-xl text-base'>
          <div>Home</div>
          <div>Warning</div>
          <div>Info</div>
          <div>About Us</div>
        </div>

        <div className="flex gap-3 items-center">
          <div>
            <Link href="/login" className="px-4 py-2 bg-[#7B3F00] rounded-md text-white font-medium text-center">Login</Link>
          </div>
          <div>
            <Link href="/signup" className="px-4 py-2 bg-[#7B3F00] rounded-md text-white font-medium text-center">SignUp</Link>
          </div>
          {/* <div className='w-12 h-12 flex items-center ml-2'>
            <Image className='w-full h-full rounded-[50%]' src={UserIcon} />
          </div> */}
        </div>

      </div>
      
    </div>
  )
}

export default Navbar
