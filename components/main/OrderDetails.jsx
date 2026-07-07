import Link from "next/link"


const OrderDetails = ({order}) => {
  return (
 <div className="max-w-7xl mx-auto p-4 sm:p-6">
    <h2 className="text-2xl  md:text-3xl font-bold mb-6 ">جزئیات سفارش</h2>
    {
        !order ? (
            <p className="text-rose-600 text-lg font-bold mb-6">سفارشی یافت نشد</p>
        ) : (
            <div className="p-4 sm:p-6 rounded-lg border ">
                {/* order info */}
                <div className="flex flex-col sm:flex-row justify-between mb-8">
                    <div className="">
                        <h3 className="text-lg md:text-xl font-semibold ">آی دی سفارش : #{order._id}</h3>
                        <p className="text-gray-600">{new Date(order.createdAt).toLocaleDateString()}</p>
          
                    </div>
                    <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0 ">
                        <span className={`${order.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-rose-700"} px-3 py-1 rounded-full text-sm font-medium mb-2`}>{order.isPaid ? "پرداخت شده" : "پرداخت نشده"}</span>
                        <span className={`${order.isDelivered ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"} px-3 py-1 rounded-full text-sm font-medium mb-2`}>{order.isDelivered ? "تحویل شده" : "درحال ارسال"}</span>
                    </div>
                </div>
                {/* customer , payment , shipping info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
                    <div className="">
                        <h4 className="text-lg font-semibold mb-2 ">مشخصات پرداخت</h4>
                        <p className="">طریقه پرداخت : {order.paymentMethode}</p>
                        <p className="">وضعیت پرداخت : {order.isPaid ? "پرداخت شده" : "پرداخت نشده"}</p>
                    </div>
                    <div className="">
                        <h4 className="text-lg font-semibold mb-2 ">مشخصات مرسوله</h4>
                        <p className="">طرقه ارسال : {order.shippingMethode}</p>
                        <p className="">آدرس ارسال : {`${order.shippingAddress.city},  ${order.shippingAddress.country}`}</p>
                    </div>
                </div>
                {/* order items */}
                <div className="overflow-x-auto">
                    <h4 className="text-lg font-semibold mb-4 ">سفارشات</h4>
                    <table className="min-w-full textgray600 border-collapse border border-gray-300 mb-4">
                        <thead className="bg-gray-100">
                            <tr className="">
                                <th className="py-2 px-4">نام محصول</th>
                                <th className="py-2 px-4">قیمت</th>
                                <th className="py-2 px-4">تعداد</th>
                                <th className="py-2 px-4">قیمت کل</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {order.orderItems.map((item) => (
                                <tr key={item.productId} className="border-b border-gray-300">
                                    <td className="py-2 px-4 flex items-center">
                                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg ml-2" />
                                        <Link href={`/products/${item.productId}`} className="text-blue-500 hover:text-blue-700 ml-2 transition duration-300 ease-in-out">{item.name}</Link>
                                    </td>
                                    <td className="py-2 px-4"> {item.price} تومان</td>
                                    <td className="py-2 px-4">{item.quantity}</td>
                                    <td className="py-2 px-4">{item.price * item.quantity} تومان</td>
                                    </tr>
                            )
                            )}
                        </tbody>
                    </table>
                </div>
                {/* back to orders */}
                <Link href="/orders" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">بازگشت به سفارشات</Link>
            </div>
        )
    }
 </div>
  )
}

export default OrderDetails