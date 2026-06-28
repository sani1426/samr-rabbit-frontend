"use client"
import { useMainContext } from '@/context/MainContext'
import { HiOutlineShoppingBag } from 'react-icons/hi2'

const CartButton = () => {
    const { toggleCartDrawer } = useMainContext()
  return (
      <button onClick={toggleCartDrawer} className='relative hover:text-black'>
          <HiOutlineShoppingBag className='w-6 h-6 text-gray-700' />
          <span className='absolute -top-1 bg-[#5b0e14] text-white text-xs rounded-full px-2 py-0.5'>
              4
          </span>
      </button>
  )
}

export default CartButton