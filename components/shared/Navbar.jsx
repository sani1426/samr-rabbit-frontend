import {HiOutlineUser } from "react-icons/hi2";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import CartDrawer from "./CartDrawer";

import NavButtons from "../ui/NavButtons";
import MobileDrawer from "./MobileDrawer";

const Navbar = () => {

  return (
    <>
      <nav className={`container mx-auto flex items-center justify-between  py-4 px-6 `}>
        <div>
          <Link className="text-3xl font-medium txt-gradient" href="/">
            سامان شاپ
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            href="/collection?gender=Men"
            className="text-gray-700 hover:text-black text-sm font-medium"
          >
            مردانه
          </Link>
          <Link
            href="collection?gender=Women"
            className="text-gray-700 hover:text-black text-sm font-medium"
          >
            زنانه
          </Link>
          <Link
            href="/collection?category=Top+Wear"
            className="text-gray-700 hover:text-black text-sm font-medium"
          >
            پیراهن
          </Link>
          <Link
            href="/collection?category=Bottom+Wear"
            className="text-gray-700 hover:text-black text-sm font-medium"
          >
            شلوار
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/admin" className="block  bg-black px-2 rounded text-sm text-white ">ادمین</Link>
          <Link href="/profile" className="hover:text-black ">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>

          {/* search icon */}
          <div className="overflow-hidden ">
            <SearchBar />
          </div>
          <NavButtons />
          <MobileDrawer />
        </div>
      </nav>
      <CartDrawer />
    </>
  );
};

export default Navbar;
