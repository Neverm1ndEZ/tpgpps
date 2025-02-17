import Image from 'next/image'
import React from 'react'

export default function Navbar() {

  const topNavItems = [
    {id: 1, label: 'Home', icon: false },
    {id: 2, label: 'Profile', icon: true },
    {id: 3, label: 'Academics', icon: true },
    {id: 4, label: 'Student Life', icon: true },
    {id: 5, label: 'Facilities', icon: true },
    {id: 5, label: 'Contact Us', icon: false },
    {id: 4, label: 'Mandatory Public Disclosure' },
  ]

  return (
    <nav className='py-2 px-14 flex items-center justify-center p-2 gap-x-6 h-14 bg-[#213162] font-dm w-full'>
      <ul className="flex items-center justify-around w-full gap-x-9">
          {topNavItems.map((nav, index) => (
            <li key={index} className="flex items-center gap-2 text-lg text-[#FFFFFF]">
              {/* <Link href={nav.href} className="block py-2"> */}
                {nav.label}
                {nav.icon ? <Image src={'/global/down-arrow.svg'} alt='Arrow' width={28} height={28} /> : <></>}
              {/* </Link> */}
            </li>
          ))}
        </ul>
    </nav>
  )
}
