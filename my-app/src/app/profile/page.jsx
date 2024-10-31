"use client";
import Image from "next/image";
import { useState } from "react";
import UserPic from "../../../public/user.png";

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
  ];

  const [select, setSelect] = useState("Dashboard");

  return (
    <div className="container text-white mt-24 px-4 min-h-screen ">
      <div className="wrapper flex">
        <div className="flex flex-col gap-3 min-w-56 border-r-2 border-[#ffffff80] pr-4">
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
                onClick={() => setSelect(text)}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
        <div className="px-4 grow">
          <div className="w-full 4box flex justify-between gap-3">
            <div className="grow bg-slate-700 text-lg hover:text-red-300 py-5 rounded-md text-center cursor-pointer">Impression</div>
            <div className="grow bg-slate-700 text-lg hover:text-red-300 py-5 rounded-md text-center cursor-pointer">SignUp</div>
            <div className="grow bg-slate-700 text-lg hover:text-red-300 py-5 rounded-md text-center cursor-pointer">Custom Room</div>
            <div className="grow bg-slate-700 text-lg hover:text-red-300 py-5 rounded-md text-center cursor-pointer">CPA Lead</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
