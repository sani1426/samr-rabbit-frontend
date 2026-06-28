"use client"

import { useState } from "react"
import { IoMdClose } from "react-icons/io"

const CartDrawer = () => {
  const [draweOpen, setDrawerOpen] = useState(false)
  const toggleCartDrawer = () => {
    setDrawerOpen(!draweOpen)
  }
  return (
    <>
      <button onClick={toggleCartDrawer} className='relative hover:text-black'>
        <HiOutlineShoppingBag className='w-6 h-6 text-gray-700' />
        <span className='absolute -top-1 bg-[#5b0e14] text-white text-xs rounded-full px-2 py-0.5'>
          4
        </span>
      </button>

    <div className={`fixed top-0 righ-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${draweOpen ? "translate-x-0" : "translate-x-full"}`}>
      <div className="flex justify-end p-4">
        <button onClick={()=>setDrawerOpen(false)}>
        <IoMdClose className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </div>
    </>
  )
}

export default CartDrawer