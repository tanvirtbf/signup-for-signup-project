"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SlSocialFacebook } from "react-icons/sl";
import { PiSkypeLogoThin } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { PiTelegramLogoLight } from "react-icons/pi";
import { PiThreadsLogoLight } from "react-icons/pi";
import { PiWhatsappLogoThin } from "react-icons/pi";




const Footer = () => {
  return (
    <div className='w-full flex flex-col'>
        <div className='w-full h-24 bg-[#D1D1D1] flex flex-col justify-center items-center'>
            <div>
                <h2 className='text-center font-bold text-black text-2xl'>Follow Us</h2>
            </div>
            <div>
                <Link href={'/login'}>
                    <SlSocialFacebook />
                </Link>
            </div>
            <div>
                <Link href={'/login'}>
                    <PiSkypeLogoThin />
                </Link>
            </div>
            <div>
                <Link href={'/login'}>
                    <CiTwitter />
                </Link>
            </div>
            <div>
                <Link href={'/login'}>
                    <CiInstagram />
                </Link>
            </div>
            <div>
                <Link href={'/login'}>
                    <PiTelegramLogoLight />
                </Link>
            </div>
            <div>
                <Link href={'/login'}>
                    <PiThreadsLogoLight />
                </Link>
            </div>
            <div>
                <Link href={'/login'}>
                    <PiWhatsappLogoThin />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer