"use client"
import React, { useState } from 'react'


import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link';
import Username from '../app/admin/profile/[username]/page';


const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { data: session } = useSession();

  return (
 <>
 
<button onClick={() => setIsOpen(!isOpen)}  

  id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">{session?.user?.name} <img src={session?.user?.image} alt="user"  className='rounded-full w-8 h-8 ml-2' />
</button>


<div id="dropdownHover" className={`z-10 ${isOpen ? 'block' : 'hidden'} absolute top-16 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
      <li>
        <Link href="/admin/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
      </li>
      <li>
        <Link href= {`/admin/profile/${session.user?.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
      </li>
      <li>
        <Link href="/admin/earning" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
      </li>
      <li>
        <Link href="/"  onClick={() => signOut()}  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
      </li>
    </ul>
</div>
</>
  )
}

export default DropDown