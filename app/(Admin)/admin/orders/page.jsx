"use client"
import React from 'react'

const page = () => {
  const orders = [
    {
      _id: 1,
      user : {
        name: "Sam",
        email: "sam@example.com"
      },
      totalPrice: 100,
      status: "proccessing"
      }
  ]

  const handleDeleteOrder = (orderId) => {
    if(window.confirm("آیا مطمئن هستید که می خواهید سفارش را حذف کنید؟")) {
      console.log(orderId);
    }
  }
  return (
   <div className="max-w-7xl mx-auto p-6">
    <h2 className="text-2xl font-bold mb-6">مدیریت سفارشات</h2>
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="min-w-full text-right text-gray-500">
        <thead className="bg-gray-100 text-xs text-gray-700 uppercase">
          <tr className="">
            <th className="px-4 py-3">ID سفارش</th>
            <th className="px-4 py-3">نام کاربر</th>
            <th className="px-4 py-3">قیمت کل</th>
            <th className="px-4 py-3">وضعیت</th>
            <th className="px-4 py-3">عملیات</th>
            </tr>
        </thead>
        <tbody className="">
          {
            orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order._id} className="border-b hover:bg-gray-50 cursor-pointer">
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">{order._id}</td>
                  <td className="p-4">{order.user.name}</td>
                  <td className="p-4">{order.totalPrice}</td>
                  <td className="p-4">
                    <select name="status"  value={order.status} onChange={(e) => {handleStatusChange(order._id, e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                      <option value="proccessing" className="">درحال پردازش</option>
                      <option value="shipped" className="">ارسال شده</option>
                      <option value="delivered" className="">تحویل شده</option>
                      <option value="cancelled" className="">لغو شده</option>
                    </select>
                  </td>
                <td>
                  <button
                  onClick={() => handleStatusChange(order._id, "deliverd")}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">تحویل شده</button>
                </td>
                      </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">هیچ سفارشی یافت نشد.</td>
              </tr>
            )
          }
        </tbody>
        </table>
    </div>
   </div>
  )
}

export default page