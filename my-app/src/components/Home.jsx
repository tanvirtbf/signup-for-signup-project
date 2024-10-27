"use client";
import { useRouter } from "next/navigation";
import UserImage from "../../public/user.png";
import Image from "next/image";
import { MdOutlineDashboard } from "react-icons/md";

export default function Home() {
  const router = useRouter();

  return (
    <div className="container px-5 text-white">
      Home Page
    </div>
  );
}
