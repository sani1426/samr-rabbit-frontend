"use client"
import { useMainContext } from '@/context/MainContext'
import { HiBars3BottomRight, HiOutlineShoppingBag } from 'react-icons/hi2'

const NavButtons = () => {
    const { toggleCartDrawer, toggleSideBar } = useMainContext();
  return (
    <>
      <button onClick={toggleCartDrawer} className="relative hover:text-black cursor-pointer">
        <HiOutlineShoppingBag className="w-6 h-6 text-gray-700" />
        <span className="absolute -top-1 bg-[#5b0e14] text-white text-xs rounded-full px-2 py-0.5">
          4
        </span>
      </button>

      {/* <button onClick={toggleSideBar} className="md:hidden cursor-pointer">
        <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
      </button> */}
    </>
  );
}

export default NavButtons;