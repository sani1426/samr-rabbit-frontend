import {
  HiOutlineShoppingBag,
  HiBars3BottomRight,
  HiOutlineUser
} from 'react-icons/hi2'
import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
      <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
        <div>
          <Link className='text-3xl font-medium' href='/'>
          <Image src="../../public/images/logo.png" alt='logo-image'  width={32} height={20} />
          </Link>
        </div>
        <div className='hidden md:flex space-x-6'>
          <Link
            href=''
            className='text-gray-700 hover:text-black text-sm font-medium'
          >
            مردانه
          </Link>
          <Link
            href=''
            className='text-gray-700 hover:text-black text-sm font-medium'
          >
            زنانه
          </Link>
          <Link
            href=''
            className='text-gray-700 hover:text-black text-sm font-medium'
          >
            پیراهن
          </Link>
          <Link
            href=''
            className='text-gray-700 hover:text-black text-sm font-medium'
          >
            شلوار
          </Link>
        </div>
        <div className='flex items-center space-x-4'>
          <Link href='/profile' className='hover:text-black '>
            <HiOutlineUser className='h-6 w-6 text-gray-700' />
          </Link>
          <button className='relative hover:text-black'>
            <HiOutlineShoppingBag className='w-6 h-6 text-gray-700' />
            <span className='absolute -top-1 bg-[#5b0e14] text-white text-xs rounded-full px-2 py-0.5'>
              4
            </span>
          </button>
          {/* search icon */}
          <div className='overflow-hidden'>
            <SearchBar />
          </div>

          <button className='md:hidden'>
            <HiBars3BottomRight className='h-6 w-6 text-gray-700' />
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
