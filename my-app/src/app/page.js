"use client"
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <button onClick={()=> router.push('/signup')} className="border border-red-200 p-4 rounded-md bg-slate-500 hover:bg-slate-900">SignUp Page</button>
        <button onClick={()=> router.push('/login')} className="border border-red-200 p-4 rounded-md bg-slate-500 hover:bg-slate-900">Login Page</button>
      </main>
    </div>
  );
}
