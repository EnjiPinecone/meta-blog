import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='hidden md:flex'>
        <ul className='flex items-center gap-10'>
            <li><Link href='/' className='text-[#3B3C4A] text-base '>Home</Link></li>
            <li><Link href='/blogs' className='text-[#3B3C4A] text-base '>Blogs</Link></li>
            <li><Link href='/contact' className='text-[#3B3C4A] text-base '>Contact</Link></li>
        </ul>
    </div>
  )
}
