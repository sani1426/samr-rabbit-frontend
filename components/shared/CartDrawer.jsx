"use client";

import { useMainContext } from "@/context/MainContext";
import { IoMdClose } from "react-icons/io";
import CartContents from "../cart/CartContents";
import Link from "next/link";

const CartDrawer = () => {
  const { draweOpen, toggleCartDrawer,sideBarOpen,toggleSideBar } = useMainContext();
  return (
    <>
    <div
      className={`fixed top-0 righ-0 w-3/4 sm:w-1/2 md:w-120 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        draweOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      <div className="grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">سبد خرید</h2>
        <CartContents />
      </div>

      <div className="p-4 bg-white sticky bottom-0">
        <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all">
          پرداخت صورتحساب
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          محاسبه هزینه ارسال و وارد کردن کد تخفیف در سبد خرید
        </p>
      </div>
    </div>

    <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${sideBarOpen ? "translate-x-full" : "translate-x-0"}`}>
      <div className="flex justify-end p-4">
        <button onClick={toggleSideBar}><IoMdClose className="h-6 w-6 text-gray-600" /></button>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">منو</h2>
        <nav className="space-y-4">
          <Link href="/" onClick={toggleSideBar} className="block text-gray-600 hover:text-black " >مردانه</Link>
          <Link href="/" onClick={toggleSideBar} className="block text-gray-600 hover:text-black " >زنانه</Link>
          <Link href="/" onClick={toggleSideBar} className="block text-gray-600 hover:text-black " >پیراهن</Link>
          <Link href="/" onClick={toggleSideBar} className="block text-gray-600 hover:text-black " >شلوار</Link>
        </nav>
      </div>
    </div>
    </>
  );
};

export default CartDrawer;
