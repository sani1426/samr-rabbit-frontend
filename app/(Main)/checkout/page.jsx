"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const cart = {
  products: [
    {
      name: "پیراهن دکمه‌دار کلاسیک آکسفورد",
      description:
        "این پیراهن کلاسیک آکسفورد برای ظاهری آراسته و در عین حال راحت طراحی شده است. تولید شده از پنبه باکیفیت، دارای یقه دکمه‌دار و برشی راحت و آزاد است. ایده‌آل برای موقعیت‌های رسمی و روزمره، همراه با آستین‌های بلند، سجاف دکمه‌دار و برش پشت. پیراهن با لبه پایینی ملایم و هلال و سرآستین‌های دکمه‌دار قابل تنظیم تکمیل شده است.",
      price: 39.99,
      discountPrice: 34.99,
      countInStock: 20,
      sku: "OX-SH-001",
      category: "Top Wear",
      brand: "Urban Threads",
      size: "S",
      colors: "قرمز",
      collections: "Business Casual",
      material: "Cotton",
      gender: "Men",
      images: [
        {
          url: "https://picsum.photos/500/500?random=39",
          altText: "Classic Oxford Button-Down Shirt Front View",
        },
        {
          url: "https://picsum.photos/500/500?random=40",
          altText: "Classic Oxford Button-Down Shirt Back View",
        },
      ],
      rating: 4.5,
      numReviews: 12,
    },
    {
      name: "پیراهن کشی جذب (اسلیم فیت)",
      description:
        "یک پیراهن جذب و چندمنظوره، عالی برای قرارهای کاری یا مهمانی‌های شبانه. طراحی شده با اندامی فیت، که خاصیت کشسانی افزوده شده به آن، حداکثر راحتی را در طول روز فراهم می‌کند. دارای یقه برگردان آهاردار، سجاف دکمه‌دار و سرآستین‌های قابل تنظیم.",
      price: 29.99,
      discountPrice: 24.99,
      countInStock: 35,
      sku: "SLIM-SH-002",
      category: "Top Wear",
      brand: "Modern Fit",
      sizes: "S",
      colors: "مشکی",
      collections: "Formal Wear",
      material: "Cotton Blend",
      gender: "Men",
      images: [
        {
          url: "https://picsum.photos/500/500?random=41",
          altText: "Slim-Fit Stretch Shirt Front View",
        },
        {
          url: "https://picsum.photos/500/500?random=42",
          altText: "Slim-Fit Stretch Shirt Back View",
        },
      ],
      rating: 4.8,
      numReviews: 15,
    },
    {
      name: "پیراهن جین کژوال",
      description:
        "این پیراهن جین راحت از پارچه جین پنبه‌ای سبک ساخته شده است. دارای تن‌خور معمولی (راسته)، دکمه‌های فشاری و لبه پایینی صاف است. با جزئیات الهام‌گرفته از استایل وسترن، این پیراهن برای پوشیدن روی تیشرت یا به تنهایی عالی است.",
      price: 49.99,
      discountPrice: 44.99,
      countInStock: 15,
      sku: "CAS-DEN-003",
      category: "Top Wear",
      brand: "Street Style",
      sizes: "XXL",
      colors: "آبی روشن",
      collections: "Casual Wear",
      material: "Denim",
      gender: "Men",
      images: [
        {
          url: "https://picsum.photos/500/500?random=43",
          altText: "Casual Denim Shirt Front View",
        },
        {
          url: "https://picsum.photos/500/500?random=44",
          altText: "Casual Denim Shirt Back View",
        },
      ],
      rating: 4.6,
      numReviews: 8,
    },
  ],
  totalPrice: 300,
};
const page = () => {
  const router = useRouter();
  const [checkoutId, setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    router.push("/order-confirmation");
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* right section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl mb-6">صورتحساب</h2>
        <form onSubmit={handleCreateCheckout} className="">
          <h3 className="text-lg mb-6">جزئیات تماس</h3>
          <div className="mb-4">
            <label className="block text-gray-700">ایمیل</label>
            <input
              type="email"
              className="w-full p-2 border  rounded"
              value="user@example.com"
              disabled
            />
          </div>
          <h3 className="text-lg mb-4">ارسال</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="">
              <label className="block text-gray-700">نام</label>
              <input
                type="text"
                className="w-full p-2 border  rounded"
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="">
              <label className="block text-gray-700">نام خانوادگی</label>
              <input
                type="text"
                className="w-full p-2 border  rounded"
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">آدرس تحویل</label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="">
              <label className="block text-gray-700">شهر</label>
              <input
                type="text"
                className="w-full p-2 border  rounded"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="">
              <label className="block text-gray-700">کد پستی</label>
              <input
                type="text"
                className="w-full p-2 border  rounded"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">کشور</label>
            <input
              type="text"
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">شماره تلفن</label>
            <input
              type="text"
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mt-6">
            {!checkoutId ? (
          
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded"
                >
                  پرداخت
                </button>
       
            ) : (
              <div className="">
                <h3 className="text-lg mb-4">پرداخت اینترنتی</h3>
              </div>
            )}
          </div>
        </form>
      </div>
      {/*  left section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">سفارشات</h3>
        <div className="border-t py-4 mb-4">
          {cart.products.map((product, index) => (
            <div
              className="flex items-start justify-between py-2 border-b"
              key={index}
            >
              <div className="flex items-start">
                <img
                  src={product.images[0].url}
                  alt={product.images[0].altText}
                  className="w-20 h-20 object-cover ml-4 rounded"
                />
                <div className="">
                  <h3 className="text-md">{product.name}</h3>
                  <p className="text-gray-500">سایز : {product.size}</p>
                  <p className="text-gray-500">رنگ : {product.colors}</p>
                </div>
                <p className="text-xl text-green-600 mr-4">
                  تومان {` ${product.price?.toLocaleString()}`}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between text-lg mb-4">
          <p>جمع محصولات:</p>
          <p>$ {cart.totalPrice?.toLocaleString()}</p>
        </div>
        <div className="flex items-center justify-between text-lg ">
          <p className="">هزینه ارسال:</p>
          <p className="">رایگان</p>
        </div>
        <div className="flex items-center justify-between text-lg mt-4 border-t pt-4">
          <p className="">جمع کل:</p>
          <p className="">$ {cart.totalPrice?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
