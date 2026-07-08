"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaBars,
  FaBoxOpen,
  FaClipboardList,
  FaSignOutAlt,
  FaStore,
  FaUser,
} from "react-icons/fa";

const AdminSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const pathName = usePathname();
  const router = useRouter();
  const handleLogout = () => {
    router.push("/")
  };
  return (
    <>
      {/* mobile drawer button */}
      <div className="flex md:hidden p-4 bg-gray-900 text-white z-20">
        <button onClick={toggleSidebar} className="">
          <FaBars className="" size={24} />
        </button>
        <h1 className="mr-4 text-xl font-medium">ادمین داشبورد</h1>
      </div>
      {/* overlay for mobile drawer */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      <div
        className={`bg-gray-900 w-64 min-h-screen text-white absolute md:relative transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:block z-20`}
      >
        {/* admin sidebar content */}
        <div className="p-6">
          <div className="mb-6">
            <Link href="/admin" className="text-2xl font-medium">
              سامان شاپ
            </Link>
          </div>
          <h2 className="text-xl font-medium mb-6 text-center">
            ادمین داشبورد
          </h2>
          <nav className="flex flex-col space-y-2">
            <Link
              href="/admin/users"
              className={`${
                pathName === "/admin/users"
                  ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2 transition-all duration-300 ease-in-out"
              }`}
            >
              <FaUser />
              <span className="">کاربران</span>
            </Link>
            <Link
              href="/admin/products"
              className={`${
                pathName === "/admin/users"
                  ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2 transition-all duration-300 ease-in-out"
              }`}
            >
              <FaBoxOpen />
              <span className="">محصولات</span>
            </Link>
            <Link
              href="/admin/orders"
              className={`${
                pathName === "/admin/users"
                  ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2 transition-all duration-300 ease-in-out"
              }`}
            >
              <FaClipboardList />
              <span className="">سفارشات</span>
            </Link>
            <Link
              href="/"
              className={`${
                pathName === "/admin/users"
                  ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2 transition-all duration-300 ease-in-out"
              }`}
            >
              <FaStore />
              <span className="">فروشگاه</span>
            </Link>
          </nav>
          <div className="mt-6">
            <button className="w-full bg-red-500 text-white py-2 px-4 rounded flex items-center justify-center space-x-2 hover:bg-red-600 transition-all duration-300 ease-in-out cursor-pointer" onClick={handleLogout}>
              <FaSignOutAlt />
              <span>خروج</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
