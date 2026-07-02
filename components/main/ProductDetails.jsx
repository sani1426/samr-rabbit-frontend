"use client";

import { mapColor } from "@/utils/AppUtility";
import ShowImage from "../ui/ShowImage";
import { useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
  name: "تیشرت آستین بلند حرارتی (بافت وافلی)",
  description:
    "با این تیشرت حرارتی آستین بلند که از پنبه نرم با بافت وافلی ساخته شده، گرم بمانید. ایده‌آل برای پوشیدن لایه‌ای در ماه‌های سرد سال؛ طراحی جذب آن تناسب اندام راحت و گرمی را تضمین می‌کند.",
  price: 27.99,
  discountPrice: 22.99,
  countInStock: 20,
  sku: "LST-THR-009",
  category: "Top Wear",
  brand: "Winter Basics",
  sizes: ["S", "M", "L", "XL", "XXL"],
  colors: ["زغالی", "سبز", "سرمه‌ ای"],
  collections: "Winter Essentials",
  material: "Cotton",
  gender: "Men",
  images: [
    {
      url: "https://picsum.photos/500/500?random=7",
      altText: "Long-Sleeve Thermal Tee Front View",
    },
    {
      url: "https://picsum.photos/500/500?random=9",
      altText: "Long-Sleeve Thermal Tee Front View",
    },
  ],
  rating: 4.4,
  numReviews: 18,
};
const similarProducts = [
  {
    _id: 1,
    name: "شورتک جین کشی",
    description:
      "شورتک جین کشی راحت با فاق بلند و لبه زاپ‌دار ریش‌ریش. عالی برای ست کردن با تاپ‌های محبوب شما در ماه‌های گرم سال.",
    price: 40,
    discountPrice: 35,
    countInStock: 25,
    sku: "BW-W-008",
    category: "Bottom Wear",
    brand: "DenimStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["آبی", "مشکی", "سفید"],
    collections: "Denim Collection",
    material: "Denim",
    gender: "Women",
    images: [
      {
        url: "https://picsum.photos/500/500?random=26",
        altText: "Stretch Denim Shorts Front View",
      },
    ],
    rating: 4.7,
    numReviews: 15,
  },
  {
    _id: 2,
    name: "شلوارک دامن‌نما (کولوت)",
    description:
      "شلوارک گشاد مدل دامن‌نما با فاق بلند جذاب و قد برمودا (کوتاه). ترکیبی عالی از راحتی و استایل برای هر موقعیت روزمره.",
    price: 50,
    discountPrice: 45,
    countInStock: 30,
    sku: "BW-W-009",
    category: "Bottom Wear",
    brand: "ChicStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["مشکی", "سفید", "زیتونی"],
    collections: "Casual Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      {
        url: "https://picsum.photos/500/500?random=27",
        altText: "Culottes Front View",
      },
    ],
    rating: 4.6,
    numReviews: 23,
  },
  {
    _Id : 3,
    name: "شلوار پارچه‌ای پیله‌دار کلاسیک",
    description:
      "شلوار پیله‌دار اصیل و همیشگی با دوخت ظریف و فیت. یکی از ضروریات کمد لباس برای پوشش اداری یا موقعیت‌های رسمی.",
    price: 70,
    discountPrice: 65,
    countInStock: 25,
    sku: "BW-W-010",
    category: "Bottom Wear",
    brand: "ElegantWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["سرمه‌ای", "مشکی", "خاکستری"],
    collections: "Formal Collection",
    material: "Wool Blend",
    gender: "Women",
    images: [
      {
        url: "https://picsum.photos/500/500?random=28",
        altText: "Classic Pleated Trousers Front View",
      },
    ],
    rating: 4.8,
    numReviews: 20,
  },
  {
    _id : 4 ,
    name: "نیم‌تنه بافتنی کراپ",
    description:
      "یک نیم‌تنه بافتنی شیک و کراپ با اندامی جذب و زیبا. عالی برای ست کردن با شلوارهای جین فاق بلند یا دامن برای داشتن استایلی کژوال.",
    price: 40,
    discountPrice: 35,
    countInStock: 25,
    sku: "TW-W-001",
    category: "Top Wear",
    brand: "ChicKnit",
    sizes: ["S", "M", "L"],
    colors: ["مشکی", "سفید"],
    collections: "Knits Collection",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      {
        url: "https://picsum.photos/500/500?random=29",
        altText: "Knitted Cropped Top",
      },
    ],
    rating: 4.6,
    numReviews: 15,
  },
];

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQauntity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleQuantityChange = (action) => {
    if (action === "plus") setQauntity((prev) => prev + 1);
    if (action === "minus" && quantity > 1) setQauntity((prev) => prev - 1);
  };
  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast.error("لطفا سایز و رنگ محصول را انتخاب کنید", {
        duration: 1000,
      });
      return;
    }
    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success("محصول موردنظر به سبد خرید اضافه شد", {
        duration: 1000,
      });
      setIsButtonDisabled(false);
    }, 500);
  };
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row  md:gap-x-8">
          <ShowImage images={selectedProduct.images} />

          {/* right section */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectedProduct.originalPrice &&
                `${selectedProduct.originalPrice}`}
            </p>
            <p className="text-xl text-gray-600 mb-2">
              {selectedProduct.price}
            </p>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

            <div className="mb-4">
              <p className="text-gray-700">رنگبندی :</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color, index) => (
                  <button
                    style={{
                      backgroundColor: mapColor(color),
                      filter: "brightness(0.5)",
                    }}
                    onClick={() => setSelectedColor(mapColor(color))}
                    key={index}
                    className={`w-8 h-8 rounded-full border text-white ${
                      selectedColor ===
                      mapColor(
                        color ? "border-4 border-black " : "border-gray-300"
                      )
                    }`}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700">سایز بندی :</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size, index) => (
                  <button
                    className={`px-4 py-2 rounded border ${
                      selectedSize == size ? "bg-black text-white" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                    key={index}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">تعداد :</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>
            <button
              disabled={isButtonDisabled}
              onClick={handleAddToCart}
              className={`bg-black text-white px-6 py-2 rounded w-full mb-4 ${
                isButtonDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-900"
              }`}
            >
              {isButtonDisabled
                ? "در حال اضافه کردن"
                : "اضافه کردن به سبد خرید"}
            </button>
            <div className="mb-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4 ">مشخصات :</h3>
              <table className="w-full text-left text-sm text-gray-700 ">
                <tbody>
                  <tr>
                    <td className="py-1">برند</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">متریال :</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/*  you may like section */}
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">
            محصولات مرتبط
          </h2>
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
