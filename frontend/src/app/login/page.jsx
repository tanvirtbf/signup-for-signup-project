"use client"
import UserIcon from '../../../public/FormUserIcon.svg'
import PasswordIcon from '../../../public/FormPasswordIcon.svg'
import EmailIcon from '../../../public/FormEmailIcon.svg'
import Image from 'next/image'
import Link from 'next/link'

const Login = () => {
  return (
    <div className="w-full h-screen mt-12 flex items-center justify-center px-4 bg-[#1A1D26]">
      <div className="sm:w-[500px] w-full p-6 mx-auto  border-[#5E4D3F] border-[1.5px] relative rounded-sm">
        <div className="absolute -top-6 w-32 h-12  flex justify-center items-center bg-[#5E4D3F] rounded-md">
          <h2 className="text-3xl text-white text-center">Login</h2>
        </div>
        <h2 className="text-[#7C6A59] font-medium text-base my-4">Login Your Account</h2>
        <form action="" className="w-full flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-base text-[#4B4C4C] font-medium" htmlFor="firstName">User Name</label>
            <div className="bg-[#4B4C4C] flex rounded-md py-1">
              <div className="flex justify-center items-center pl-4">
                <Image src={UserIcon} alt="image"/>
              </div>
              <input className="w-full text-white bg-[#4B4C4C] border-none border outline-none p-3 rounded-md placeholder:text-[#ffffffb7] placeholder:text-base " type="text" id="firstName" placeholder="User Name " />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-base text-[#4B4C4C] font-medium" htmlFor="password">Password</label>
            <div className="bg-[#4B4C4C] flex rounded-md py-1">
              <div className="flex justify-center items-center pl-4">
                <Image src={PasswordIcon} alt="image" />
              </div>
              <input className="w-full text-white bg-[#4B4C4C] border-none border outline-none p-3 rounded-md placeholder:text-[#ffffffb7] placeholder:text-base" type="password" id="password" placeholder="Password " />
            </div>
          </div>
          <div className="flex justify-end -mt-3">
            <Link className="text-[#7C6A59] hover:text-[#4B4C4C] text-base font-medium cursor-pointer" href="/signup">Forgot Password?</Link>
          </div>
          <div className="mt-1">
            <button className="bg-[#7C6A59] py-3 w-full rounded-lg hover:bg-[#666969] text-white text-2xl font-semibold">Login</button>
          </div>
          <div className="flex justify-end gap-1 mt-2">
            <p className="text-[#4B4C4C] text-base font-medium ">Don't have a account?</p>
            <Link className="text-[#7C6A59] hover:text-[#4B4C4C] text-base font-medium cursor-pointer" href="/signup">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
