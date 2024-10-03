"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {

  const router = useRouter()

  const clsName = ``

  return (
    <div className="w-full h-20 bg-[#817e7e2b] px-5">

      <div className="w-full h-full flex justify-between items-center">

        <div className="">
          <h1 className="font-bold text-black text-3xl cursor-pointer" onClick={()=> router.push('/')}>ADSTERRAA</h1>
        </div>
        <div className="flex gap-4 h-full">
          <div className='flex justify-center items-center h-full'>
            <Link className="font-bold text-black text-xl" href="/">Home</Link>
          </div>
          <div className='flex justify-center items-center h-full'>
            <Link className="font-bold text-black text-xl" href="/">About</Link>
          </div>
          <div className='flex justify-center items-center h-full'>
            <Link className=" font-bold text-black text-xl" href="/">Services</Link>
          </div>
          <div className='flex justify-center items-center h-full'>
            <Link className="font-bold text-black text-xl" href="/">Contact Us</Link>
          </div>
        </div>
        <div className="flex gap-3 ">
          <Link href="/login" className="px-4 py-2 bg-[#7B3F00] rounded-md text-white font-medium text-center">Login</Link>
          <Link href="/signup" className="px-4 py-2 bg-[#7B3F00] rounded-md text-white font-medium text-center">SignUp</Link>
        </div>

      </div>
      
    </div>
  )
}

export default Navbar
