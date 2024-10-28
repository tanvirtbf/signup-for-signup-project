"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Logo from '../../public/logo.png'
import React from 'react'

const Navbar = () => {

  const router = useRouter()
  
  return (
    <div className="w-full h-20 px-5 text-white fixed top-0 bg-[#1A1D26] z-50">

      <div className="w-full h-full flex justify-between items-center">

        <div className="flex items-center">
          <h1 className='text-2xl cursor-pointer' onClick={()=> router.push('/')}>
            <div>
            <p className='text-3xl'>SIGN UP</p>
            <p className='text-xs text-yellow-200 text-center'>For SIGN UP</p>
            </div>
          </h1>
        </div>

        <div className='middle gap-3 sm:gap-4 sm:text-xl text-base sm:flex hidden'>
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
