"use client"
import React from 'react'

const Signup = () => {
  return (
    <div className="w-full h-screen items-center justify-center">
      <div className="w-1/2 p-6 mx-auto flex items-center">
        <form action="" className="w-full flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="firstName">First Name</label>
            <input className="p-3 rounded-md" type="text" id="firstName" placeholder="Type Your First Name " />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="lastName">Last Name</label>
            <input className="p-3 rounded-md" type="text" id="lastName" placeholder="Type Your Last Name " />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input className="p-3 rounded-md" type="text" id="email" placeholder="Type Your Email " />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input className="p-3 rounded-md" type="password" id="password" placeholder="Set a New Password" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
