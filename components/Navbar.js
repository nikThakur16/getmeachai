"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter, usePathname } from 'next/navigation';
import { useRouterRouter } from 'next/router';
import DropDown from './DropDown'
import NavbarSkeleton from './loaders/navbar/NavbarSkeleton'
const Navbar = () => {
  const { data: session  , status } = useSession()
  const user = session?.user
  console.log(status);
  const router = useRouter();
  const pathname = usePathname();


  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const isPaymentRedirect = queryParams.get('paymentdone') === 'true';
  
    if (status === "authenticated" && pathname === "/" && !isPaymentRedirect) {
     
      setTimeout(() => {
        router.push("/admin");
      }, 1000);
    }
  }, [status, router, pathname]);
 
  if (status === "loading") return <NavbarSkeleton/>
  


  return (
    <div className='flex justify-between items-center lg:h-18 md:h-12 h-10 p-4 text-white bg-gray-900 '>
        <div className='logo md:text-xl text-xs font-bold' onClick={() => router.push("/admin")} style={{cursor: "pointer"}}>get me a chai</div>
        {/* <ul className='flex gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Login</li>
            <li>Signup</li>
        </ul> */}

        <div>
      
        {/* <button onClick={() => signOut()} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
<span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
Sign Out
</span>
</button> */}
<DropDown/>
        </div>
    </div>
  )
}

export default Navbar