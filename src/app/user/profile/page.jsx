"use client";
import Image from "next/image";
import { useState } from "react";
import UserPic from "../../../../public/user.png";
import { useRouter } from "next/navigation";

const Profile = () => {
  const menubar = [
    { id: 1, text: "Dashboard" },
    { id: 2, text: "Widgets" },
    { id: 3, text: "Layouts" },
    { id: 4, text: "Sidebar" },
    { id: 5, text: "Elements" },
    { id: 6, text: "Form" },
    { id: 7, text: "Tables" },
    { id: 8, text: "Charts" },
    { id: 9, text: "Maps" },
    { id: 10, text: "Change Password" },
  ];
  const router = useRouter()

  const [select, setSelect] = useState("Dashboard");

  return (
    <div className=" text-white mt-24 px-4 min-h-screen">
      <div className="wrapper w-full grid lg:grid-cols-12 gap-9 sm:gap-0">

        <div className="flex flex-col gap-3 sm:border-r-2 sm:border-[#ffffff80] pr-4 lg:col-span-2 sm:col-span-3 col-span-12">
          <div className="profile flex gap-2">
            <div>
              <Image src={UserPic} alt={UserPic} />
            </div>
            <div className="flex flex-col">
              <h3 className="text-base sm:text-lg ">Tanvir Ahmed</h3>
              <p className="text-xs">tanvir_tbf</p>
            </div>
          </div>

          <div className="navigation text-slate-500">Navigation</div>

          <div className="menubar flex flex-col gap-3">
            {menubar.map(({ id, text }) => (
              <div
                key={id}
                className={`cursor-pointer rounded-r-full pl-2 py-2 ${
                  text === select
                    ? "bg-slate-700 text-white"
                    : "bg-inherit text-slate-400"
                }`}
                onClick={() => {
                  setSelect(text)
                  router.push('/user/change-password')
                }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className="px-4 col-span-12 sm:col-span-9 lg:col-span-10">
          <div className="w-full grid sm:grid-cols-4 gap-3">
            <div className=" bg-slate-700 text-base sm:text-lg hover:text-red-300 py-1 lg:py-5 rounded-md text-center cursor-pointer">Impression</div>
            <div className=" bg-slate-700 text-base sm:text-lg hover:text-red-300 py-1 lg:py-5 rounded-md text-center cursor-pointer">SignUp</div>
            <div className=" bg-slate-700 text-base sm:text-lg hover:text-red-300 py-1 lg:py-5 rounded-md text-center cursor-pointer">Custom Room</div>
            <div className=" bg-slate-700 text-base sm:text-lg hover:text-red-300 py-1 lg:py-5 rounded-md text-center cursor-pointer">CPA Lead</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
