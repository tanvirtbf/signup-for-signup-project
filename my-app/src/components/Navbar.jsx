import Link from 'next/link'
import React from 'react'

const Navbar = () => {

  const clsName = ``

  return (
    <div className="w-full h-20 bg-[#817e7e2b] px-5">

      <div className="w-full h-full flex justify-between items-center">

        <div className="">
          <h1 className="font-bold text-black text-3xl">ADSTERRAA</h1>
        </div>
        <div className="flex gap-2 h-full">
          <Link className="bg-slate-400  h-full w- font-bold text-black text-2xl" href="/">Home</Link>
          <Link className="bg-slate-400  h-full w- font-bold text-black text-2xl" href="/">About</Link>
          <Link className="bg-slate-400  h-full w- font-bold text-black text-2xl" href="/">Services</Link>
          <Link className="bg-slate-400  h-full w- font-bold text-black text-2xl" href="/">Contact Us</Link>
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
