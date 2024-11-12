"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import UserIcon from "../../public/user.png";
import Logo from "../../public/logo.png";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import Cookies from "js-cookie";
import { useLogoutUserMutation } from "@/lib/services/auth";

const Navbar = () => {
  // isAuth
  const [isAuth, setIsAuth] = useState(null);
  useEffect(() => {
    const authCookie = Cookies.get("is_auth");
    setIsAuth(authCookie);
  });
  const router = useRouter();

  // Logout
  const [logoutUser] = useLogoutUserMutation()
  const handleLogout = async () => {
    try {
      const response = await logoutUser()
      if (response.data && response.data.status === "success") {
        router.push('/')
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {isAuth === null && <LoadingIndicator />}
      <div className="w-full h-20 px-5 text-white fixed top-0 bg-[#1A1D26] z-50">
        <div className="w-full h-full flex justify-between items-center">
          <div className="flex items-center">
            <h1
              className="text-2xl cursor-pointer"
              onClick={() => router.push("/")}
            >
              <div>
                <p className="text-3xl">SIGN UP</p>
                <p className="text-xs text-yellow-200 text-center">
                  For SIGN UP
                </p>
              </div>
            </h1>
          </div>

          <div className="middle gap-3 sm:gap-4 sm:text-xl text-base sm:flex hidden">
            <div>Home</div>
            <div>Warning</div>
            <div>Info</div>
            <div>About Us</div>
          </div>

          <div className="flex gap-3 items-center">
            {isAuth ? (
              <div>
                <Link
                  href="/user/profile"
                  onClick={handleLogout}
                  className="px-4 py-2 bg-[#7B3F00] rounded-md text-white font-medium text-center"
                >
                  Logout
                </Link>
              </div>
            ) : (
              <>
                <div>
                  <Link
                    href="/account/login"
                    className="px-4 py-2 bg-[#7B3F00] rounded-md text-white font-medium text-center"
                  >
                    Login
                  </Link>
                </div>
                <div>
                  <Link
                    href="/account/register"
                    className="px-4 py-2 bg-[#7B3F00] rounded-md text-white font-medium text-center"
                  >
                    SignUp
                  </Link>
                </div>
              </>
            )}

            <div
              className="w-12 h-12 flex items-center ml-2 cursor-pointer"
              onClick={() => router.push("/user/profile")}
            >
              <Image className="w-full h-full rounded-[50%]" src={UserIcon} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
