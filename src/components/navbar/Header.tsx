"use client";
import Link from 'next/link';
import { useState } from 'react';

import { NavLinks } from './NavLinks';
import { HamburguerMenu } from './HamburguerMenu';

const Header = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className='relative container mx-auto py-4 px-5 flex justify-between items-center'>
      <Link className="text-primary font-semibold text-2xl" href="/">Logo</Link>
    <nav className={`md:block md:static md:h-auto overflow-hidden fixed left-0 top-0 flex h-screen items-center bg-primary md:bg-transparent transition-all ease-linear duration-150  ${isOpen ? 'right-0' : 'right-full'}`} >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className='absolute right-5 top-4 text-white p-1 md:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
        <NavLinks 
          setIsOpen={setIsOpen}
        />
      {/* <ul className='flex gap-8 items-center'>
        <li className='bg-primary text-white px-6 py-2 rounded-full'>
          <Link href="/">Login</Link>
        </li>
        <li className='text-gray-500 font-semibold'>
          <Link href="/">Registro</Link>
        </li>
      </ul> */}
    </nav>
    <HamburguerMenu 
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
 </header>
  )
}

export default Header