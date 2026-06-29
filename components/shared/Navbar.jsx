import {HiOutlineUser } from "react-icons/hi2";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import CartDrawer from "./CartDrawer";

import NavButtons from "../ui/NavButtons";

const Navbar = () => {
  return (
    <>
      <nav className="container fixed mx-auto flex items-center justify-between back-gradient py-4 px-6">
        <div>
          <Link className="text-3xl font-medium txt-gradient" href="/">
            سامان شاپ
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            href=""
            className="text-gray-700 hover:text-black text-sm font-medium"
          >
            مردانه
          </Link>
          <Link
            href=""
            className="text-gray-700 hover:text-black text-sm font-medium"
          >
            زنانه
          </Link>
          <Link
            href=""
            className="text-gray-700 hover:text-black text-sm font-medium"
          >
            پیراهن
          </Link>
          <Link
            href=""
            className="text-gray-700 hover:text-black text-sm font-medium"
          >
            شلوار
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/profile" className="hover:text-black ">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>

          {/* search icon */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>
          <NavButtons />
        </div>
      </nav>
      <CartDrawer />
    </>
  );
};

export default Navbar;
