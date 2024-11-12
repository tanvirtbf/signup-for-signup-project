"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { PiSkypeLogoThin } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { PiTelegramLogoLight } from "react-icons/pi";
import { PiThreadsLogoLight } from "react-icons/pi";
import { PiWhatsappLogoThin } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="w-full flex flex-col mt-10">
      <div className="w-full py-5 bg-[#D1D1D1] flex flex-col justify-center items-center gap-5">
        <div>
          <h2 className="text-center font-bold text-black text-2xl">
            Follow Us
          </h2>
        </div>
        <div className="flex gap-20">
          <div>
            <Link href={"/login"}>
              <SlSocialFacebook className="lg:text-4xl text-xl" />
            </Link>
          </div>
          <div>
            <Link href={"/login"}>
              <PiSkypeLogoThin className="lg:text-4xl text-xl" />
            </Link>
          </div>
          <div>
            <Link href={"/login"}>
              <CiTwitter className="lg:text-4xl text-xl" />
            </Link>
          </div>
          <div>
            <Link href={"/login"}>
              <CiInstagram className="lg:text-4xl text-xl" />
            </Link>
          </div>
          <div>
            <Link href={"/login"}>
              <PiTelegramLogoLight className="lg:text-4xl text-xl" />
            </Link>
          </div>
          <div>
            <Link href={"/login"}>
              <PiThreadsLogoLight className="lg:text-4xl text-xl" />
            </Link>
          </div>
          <div>
            <Link href={"/login"}>
              <PiWhatsappLogoThin className="lg:text-4xl text-xl" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full py-12">
        <h4 className="text-center text-white">2024 All Rights Reserved!</h4>
      </div>
    </div>
  );
};

export default Footer;
