"use client"

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
  return (
   <div className="max-w-7xl mx-auto p-6">
    <h2 className="text-2xl font-bold mb-6">مدیریت محصولات</h2>
    <div className="overflow-x-auto shadow-md sm:rounded-lg" >
      <table className="min-w-full text-right text-gray-500"></table>
    </div>
   </div>
  )
}

export default page