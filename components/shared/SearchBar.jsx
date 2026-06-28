'use client'

import { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(searchTerm);
    setIsOpen(false)
  }
  return (
    <div
      className={`items-center justify-center w-full transition-all duration-300 ${isOpen ? 'absolute top-0 left-0 w-full bg-white h-24 z-50 ' : 'w-auto '
        }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSubmit}
          className='relative flex items-center justify-center w-full'>
          <div className='relative w-1/2'>
            <input
              type='text'
              placeholder='سرچ کنید ...'
              className='bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'
              type='submit'
            >
              <HiMagnifyingGlass className='h-6 w-6' />
            </button>
          </div>
          {/*  close icon */}
          <button
            onClick={() => setIsOpen(false)}
            type='button'
            className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'
          >
            <HiMiniXMark className='h-6 w-6' />
          </button>
        </form>
      ) : (
        <button onClick={() => setIsOpen(!isOpen)}>
          <HiMagnifyingGlass className='h-6 w-6' />
        </button>
      )}
    </div>
  )
}

export default SearchBar
