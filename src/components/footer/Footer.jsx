import React from 'react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '../svg/SocialIcons'
import Link from 'next/link'
import Copyright from '../svg/Copyright'

export default function Footer() {
  return (
    <div className='bg-[#DCDDDF]'>
      <div className="w-full md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 p-5 gap-[30px] font-serif text-[#3B3C4A] items-start md:py-10">
        <div>
          <h3>About</h3>
          <p className='text-[#696A75]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <ul className='list-none flex flex-col gap-2 justify-self-center'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/blogs'>Blog</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
        <ul className='list-none flex justify-center items-center gap-[27px] justify-self-end'>
          <li>
            <FacebookIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <LinkedinIcon />
          </li>
        </ul>
        <ul>
          <li>
            <spa>Email:</spa>
            <span>enjibaysaa@gmail.com</span>
          </li>
          <li>
          <spa>Phone:</spa>
          <span>+976 89980455</span>
          </li>
        </ul>
        <div className='col-span-3 flex justify-between items-center'>
        <Copyright />
        <div className=' divide-x divide-solid flex gap-4 divide-gray-300'>
          <span>Terms of Use</span>
          <span className='pl-4'>Privacy Policy</span>
          <span className='pl-4'>Cookie Policy</span>
        </div>
        </div>
      </div>
    </div>
  )
}
