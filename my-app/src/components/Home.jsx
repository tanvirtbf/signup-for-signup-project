"use client";
import { useRouter } from "next/navigation";
import UserImage from "../../public/user.png";
import Image from "next/image";
import { MdOutlineDashboard } from "react-icons/md";

export default function Home() {
  const router = useRouter();

  return (
    <div className="container px-5 text-white">
      <div className="wrap flex">
        <div className="left">
          <div className="profile flex gap-2">
            <div>
              <Image src={UserImage} alt={UserImage} />
            </div>
            <div>
              <h3>Tanvir Ahmed</h3>
              <p>tanvir_tbf</p>
            </div>
          </div>

          <div className="my-2">Navigation</div>

          <div className="sidebar flex flex-col gap-3">
            <div className="flex gap-2 cursor-pointer">
              <div className="bg-[#23212C] p-2 rounded-full">
                <MdOutlineDashboard className="text-white" />
              </div>
              <p>Dashboard</p>
            </div>
            <div className="flex gap-2 cursor-pointer">
              <div className="bg-[#23212C] p-2 rounded-full">
                <MdOutlineDashboard className="text-white" />
              </div>
              <p>Dashboard</p>
            </div>
            <div className="flex gap-2 cursor-pointer">
              <div className="bg-[#23212C] p-2 rounded-full">
                <MdOutlineDashboard className="text-white" />
              </div>
              <p>Dashboard</p>
            </div>
          </div>
        </div>
        <div className="right bg-black">
          
        </div>
      </div>
    </div>
  );
}
