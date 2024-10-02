"use client"
import UserIcon from '../../../public/FormUserIcon.svg'
import PasswordIcon from '../../../public/FormPasswordIcon.svg'
import EmailIcon from '../../../public/FormEmailIcon.svg'
import Image from 'next/image'
import Link from 'next/link'

const Signup = () => {
  return (
    <div className="w-full mt-12 flex items-center justify-center px-4">
      <div className="sm:w-[500px] w-full p-6 mx-auto  border-[#5E4D3F] border-[1.5px] relative rounded-sm">
        <div className="absolute -top-6 w-32 h-12  flex justify-center bg-white">
          <h2 className="text-3xl text-[#5E4D3F] text-center">SignUp</h2>
        </div>
        <h2 className="text-[#7C6A59] font-medium text-base my-4">Create Your Account</h2>
        <form action="" className="w-full flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-base text-[#4B4C4C] font-medium" htmlFor="firstName">First Name</label>
            <div className="bg-[#4B4C4C] flex rounded-md py-1">
              <div className="flex justify-center items-center pl-4">
                <Image src={UserIcon} alt="image"/>
              </div>
              <input className="w-full text-white bg-[#4B4C4C] border-none border outline-none p-3 rounded-md placeholder:text-[#ffffffb7] placeholder:text-base " type="text" id="firstName" placeholder="First Name " />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-base text-[#4B4C4C] font-medium" htmlFor="lastName">Last Name</label>
            <div className="bg-[#4B4C4C] flex rounded-md py-1">
              <div className="flex justify-center items-center pl-4">
                <Image src={UserIcon} alt="image" />
              </div>
              <input className="w-full text-white bg-[#4B4C4C] border-none border outline-none p-3 rounded-md placeholder:text-[#ffffffb7] placeholder:text-base " type="text" id="lastName" placeholder="Last Name " />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-base text-[#4B4C4C] font-medium" htmlFor="userName">User Name</label>
            <div className="bg-[#4B4C4C] flex rounded-md py-1">
              <div className="flex justify-center items-center pl-4">
                <Image src={UserIcon} alt="image" />
              </div>
              <input className="w-full text-white bg-[#4B4C4C] border-none border outline-none p-3 rounded-md placeholder:text-[#ffffffb7] placeholder:text-base " type="text" id="userName" placeholder="User Name " />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-base text-[#4B4C4C] font-medium" htmlFor="email">Email</label>
            <div className="bg-[#4B4C4C] flex rounded-md py-1">
              <div className="flex justify-center items-center pl-4">
                <Image src={EmailIcon} alt="image" />
              </div>
              <input className="w-full text-white bg-[#4B4C4C] border-none border outline-none p-3 rounded-md placeholder:text-[#ffffffb7] placeholder:text-base" type="text" id="email" placeholder="Email " />
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
          <div className="mt-3">
            <button className="bg-[#7C6A59] py-3 w-full rounded-lg hover:bg-[#666969] text-white text-2xl font-semibold">SignUp</button>
          </div>
          <div className="flex justify-end gap-1 mt-2">
            <p className="text-[#4B4C4C] text-base font-medium ">Already registered?</p>
            <Link className="text-[#7C6A59] hover:text-[#4B4C4C] text-base font-medium cursor-pointer" href="/">Login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
