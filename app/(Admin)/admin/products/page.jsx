"use client"
import Link from "next/link";
import { AiFillDelete } from "react-icons/ai";
import { RiEdit2Fill } from "react-icons/ri";
const page = () => {
  const products = [
    {
      _id: "1234",
      name: "Product 1",
      description: "Description of Product 1",
      price: 100,
      stock: 10,
    },
    {
      _id: "2345",
      name: "Product 2",
      description: "Description of Product 2",
      price: 200,
      stock: 5,
    },
    {
      _id: "3456",
      name: "Product 3",
      description: "Description of Product 3",
      price: 300,
      stock: 20,
    },
  ]; // Add more products as needed

  const handleDeleteProduct = (productId) => {
    if(window.confirm("آیا مطمئن هستید که می خواهید محصول را حذف کنید؟")) {
      console.log(productId);
    }
  }
  return (
   <div className="max-w-7xl mx-auto p-6">
    <h2 className="text-2xl font-bold mb-6">مدیریت محصولات</h2>
    <div className="overflow-x-auto shadow-md sm:rounded-lg" >
      <table className="min-w-full text-right text-gray-500">
        <thead className="bg-gray-100 text-xs texgray-700 uppercase">
          <tr className="">
            <th className="px-6 py-3">نام محصول</th>
            <th className="px-6 py-3">قیمت</th>
            <th className="px-6 py-3">موجودی</th>
            <th className="px-6 py-3">عملیات</th>
          </tr>
        </thead>
        <tbody className="">
          {
            products.length > 0 ? (
              products.map((product) => (
                <tr key={product._id} className="border-b hover:bg-gray-50 cursor-pointer">
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">{product.name}</td>
                  <td className="p-4">{product.price}</td>
                  <td className="p-4">{product.stock}</td>
                  <td className="p-4 flex gap-2 justify-center items-center">
                    <Link href={`/admin/products/${product._id}/edit`} className="bg-blue-100 px-4 py-2 rounded hover:bg-blue-200 transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center">
                      <RiEdit2Fill className="text-blue-600" />
                      </Link>
                      <button onClick={()=> handleDeleteProduct(product._id)} className="bg-red-100 px-4 py-2 rounded hover:bg-red-200 transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center">
                        <AiFillDelete className="text-red-600"  />
                      </button>
                      </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">هیچ محصولی یافت نشد.</td>
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