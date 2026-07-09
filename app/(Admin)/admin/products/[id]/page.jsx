"use client"

import { useParams } from "next/navigation"
import { useState } from "react"



const page = () => {
    const {id} = useParams()
    const [productData, setProductData] = useState({
        name: "",
        price: "",
        countInStock: "",
        sku : "" ,
        description: "",
        category: "",
        brand: "" ,
        sizes : [] ,
        colors : [] ,
    collection : "" ,
    material : "" ,
    gender : "" ,
    images : [
        {
            url : "https://picsum.photos.150?random=1"
        },
        {
            url : "https://picsum.photos.150?random=2"
        }
    ] ,

    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setProductData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleImageUpload = async (e) => {
        const files = e.target.files[0]
        console.log(files);
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(productData);
    }

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6">ویرایش محصول</h2>
      <form onSubmit={handleSubmit} className="">
        <div className="mb-6">
          <label htmlFor="name" className="block font-semibold mb-2">
            نام محصول:
          </label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md border-gray-300"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="name" className="block font-semibold mb-2">
            توضیحات محصول
          </label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-md border-gray-300"
            required
            rows={4}
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">قیمت محصول:</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded-md border-gray-300"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">موجودی محصول:</label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleChange}
            className="w-full p-2 border rounded-md border-gray-300"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">کد محصول:</label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handleChange}
            className="w-full p-2 border rounded-md border-gray-300"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">
            سایز محصول (comma-separated)
          </label>
          <input
            type="text"
            name="sizes"
            value={productData.sizes.join(",")}
            onCange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full p-2 border rounded-md border-gray-300"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">
            رنگ محصول (comma-separated)
          </label>
          <input
            type="text"
            name="colors"
            value={productData.colors.join(",")}
            onCange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="w-full p-2 border rounded-md border-gray-300"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">تصویر محصول:</label>
          <input type="file" name="images" onChange={handleImageUpload} />
          <div className="flex gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div key={index} className="">
                <img
                  src={image.url}
                  alt={image.altText || "product Image"}
                  className="w-20 h-20 object-cover rounded-md shadow-md "
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-all duration-300 ease-in-out cursor-pointer"
          type="submit"
        >
          ویرایش محصول
        </button>
      </form>
    </div>
  );
}

export default page