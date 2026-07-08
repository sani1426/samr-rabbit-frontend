import Link from "next/link";


  const orders = [
    {
      _id: "2337",
      user : {
        name: "Sam",
      } ,
      totalPrice: 700,
      status: "در حال پردازش",
    },
    {
      _id: "3337",
      user : {
        name: "ali",
      } ,
      totalPrice: 330,
      status: "تحویل داده شده",
    },
    {
      _id: "2357",
      user : {
        name: "Sam",
      } ,
      totalPrice: 700,
      status: "در حال پردازش",
    },
    {
      _id: "2397",
      user : {
        name: "Sam",
      } ,
      totalPrice: 700,
      status: "در حال پردازش",
    },

  ]; 

const page = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">ادمین داشبورد</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">درآمد</h2>
          <p className="text-2xl">1200000 تومان</p>
        </div>
        <div className="p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">کل سفارش‌ها</h2>
          <p className="text-2xl">120</p>
          <Link
            href="/admin/orders"
            className="text-blue-500 hover:text-blue-700"
          >
            مدیریت سفارش‌ها
          </Link>
        </div>
        <div className="p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">کل محصولات</h2>
          <p className="text-2xl">400</p>
          <Link
            href="/admin/products"
            className="text-blue-500 hover:text-blue-700"
          >
            مدیریت محصولات
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">آخرین سفارش‌ها</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-right text-gray-500 border-collapse">
            <thead className="bg-gray-100 text-xs text-gray-700">
              <tr className="">
                <th className="px-4 py-2">شماره سفارش</th>
                <th className="px-4 py-2">نام کاربر</th>
                <th className="px-4 py-2">مبلغ</th>
                <th className="px-4 py-2">وضعیت</th>
              </tr>
            </thead>
            <tbody className="">
              {
              orders.length > 0 ? (
                  orders.map((order) => (
                <tr key={order._id} className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
                  <td className="p-4">{order._id}</td>
                  <td className="p-4">{order.user.name}</td>
                  <td className="p-4">{order.totalPrice}</td>
                  <td className="p-4">{order.status}</td>
                  </tr>
              ))
              ) : (
                <tr> 
                  <td className="p-4 text-center text-gray-500" colSpan="4">هیچ سفارشی وجود ندارد.</td> </tr>
              )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default page