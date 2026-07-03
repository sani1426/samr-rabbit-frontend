"use client"

import LoginImage from "@/components/ui/LoginImage"
import Link from "next/link"
import { useState } from "react"

const page = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex-col justify-center items-center p-8 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm"
        >
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">سامان شاپ</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">سلام ! </h2>
          <p className="text-center mb-6">ایمیل و رمز عبور خود را وارد کنید</p>
          <div className="mb-4">
            <label htmlFor="" className="block text-sm font-semibold mb-2">
              ایمیل
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full p-2 border rounded"
              placeholder="ایمیل خود را وارد کنید"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-sm font-semibold mb-2">
              رمز عبور
            </label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="رمز عبور خود را وارد کنید"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold  hover:bg-gray-800 transition"
          >
            ورود
          </button>
          <p className="mt-6 text-center text-sm">
            ثبت نام نکرده اید؟{" "}
            <Link href="/register" className="text-blue-600">
              ثبت نام
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <LoginImage />
        </div>
      </div>
    </div>
  );
}

export default page
