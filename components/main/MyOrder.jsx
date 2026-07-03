"use client"

import React, { useEffect, useState } from 'react'

const MyOrder = () => {
    const [orders , setOrders] = useState([])
    useEffect(()=>{

        setTimeout(() => {
           const maOrders = [
            {
                _id: "2337",
                createdAt : new Date(),
                DeliveryAddress : {
                    city : "مشهد" , country : "ایران"
                },
                orderItems: [
                    {
                        name: "شلوار جین " ,
                        image : "https://picsum.photos/500/500?random=2"
                    }
                ],
                totalPrice :700 ,
                isPaid : true
            },
            {
                _id: "1234",
                createdAt : new Date(),
                DeliveryAddress : {
                    city : "تهران" , country : "ایران"
                },
                orderItems: [
                    {
                        name: "شلوار جین " ,
                        image : "https://picsum.photos/500/500?random=1"
                    }
                ],
                totalPrice :300 ,
                isPaid : true
            },
           ] 
           setOrders(maOrders)
        }, 1000);
    },[])
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">سفارشات من</h2>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-right text-gray-500">
          <thead className="bg-gray-100 text-xs text-gray-700">
            <tr className="">
              <th className="py-2 px-4 sm:py-3 ">عکس</th>
              <th className="py-2 px-4 sm:py-3 ">آی دی سفارش</th>
              <th className="py-2 px-4 sm:py-3 ">زمان ثبت</th>
              <th className="py-2 px-4 sm:py-3 ">آدرس تحویل</th>
              <th className="py-2 px-4 sm:py-3 ">محصولات</th>
              <th className="py-2 px-4 sm:py-3 ">مبلغ قابل پرداخت</th>
              <th className="py-2 px-4 sm:py-3 ">وضعیت</th>
            </tr>
          </thead>
          <tbody className="">
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  className="border-b hover:border-r-gray-50 cursor-pointer"
                  key={order?._id}
                >
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    <img
                      src={order?.orderItems[0]?.image}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                      alt=""
                    />
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order?._id}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {new Date(order?.createdAt).toLocaleDateString()}
                    {new Date(order?.createdAt).toLocaleTimeString()}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order?.DeliveryAddress ? `${order?.DeliveryAddress.city} , ${order.DeliveryAddress.country}` : "N/A"}
                  </td>
                    <td className="py-2 px-2 sm:py-4 sm:px-4">
                        {
                            order.orderItems.length
                        }
                    </td>
                      <td className="py-2 px-2 sm:py-4 sm:px-4">
                        ${order.totalPrice}
                      </td>
                        <td className="py-2 px-2 sm:py-4 sm:px-4">
                            <span className={`${order.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"} px-2 py-1 rounded-full text-xs sm:text-sm font-medium`}>{order?.isPaid ? "پرداخت شده" : "پرداخت نشده"}</span>
                        </td>
                </tr>
              ))
            ) : (
              <tr className="">
                <td
                  colSpan={7}
                  className="py-4 px-4 text-center text-gray-500 "
                >
                  هیچ سفارشی ندارید !!!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyOrder