"use client"

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const NewArrivals = () => {
    const scrollRef = useRef(null)
    const [isDragging , setIsDragging] = useState(false)
    const [startX , setStartX] = useState(0)
    const [scrollLeft , setScrollLeft] = useState(false)
    const [canScrollRight , setCanScrollRight] = useState(true)
    const [canScrollLeft , setCanScrollLeft] = useState(false)
  const newArrivals = [
    {
      _id: 1,
      name: "پیراهن دکمه‌دار کلاسیک آکسفورد",
      description:
        "این پیراهن کلاسیک آکسفورد برای ظاهری آراسته و در عین حال راحت طراحی شده است. تولید شده از پنبه باکیفیت، دارای یقه دکمه‌دار و برشی راحت و آزاد است. ایده‌آل برای موقعیت‌های رسمی و روزمره، همراه با آستین‌های بلند، سجاف دکمه‌دار و برش پشت. پیراهن با لبه پایینی ملایم و هلال و سرآستین‌های دکمه‌دار قابل تنظیم تکمیل شده است.",
      price: 39.99,
      discountPrice: 34.99,
      countInStock: 20,
      sku: "OX-SH-001",
      category: "Top Wear",
      brand: "Urban Threads",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["قرمز", "آبی", "زرد"],
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
      _id: 12,
      name: "پیراهن کشی جذب (اسلیم فیت)",
      description:
        "یک پیراهن جذب و چندمنظوره، عالی برای قرارهای کاری یا مهمانی‌های شبانه. طراحی شده با اندامی فیت، که خاصیت کشسانی افزوده شده به آن، حداکثر راحتی را در طول روز فراهم می‌کند. دارای یقه برگردان آهاردار، سجاف دکمه‌دار و سرآستین‌های قابل تنظیم.",
      price: 29.99,
      discountPrice: 24.99,
      countInStock: 35,
      sku: "SLIM-SH-002",
      category: "Top Wear",
      brand: "Modern Fit",
      sizes: ["S", "M", "L", "XL"],
      colors: ["مشکی", "سرمه‌ای", "زرشکی"],
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
      _id: 15,
      name: "پیراهن جین کژوال",
      description:
        "این پیراهن جین راحت از پارچه جین پنبه‌ای سبک ساخته شده است. دارای تن‌خور معمولی (راسته)، دکمه‌های فشاری و لبه پایینی صاف است. با جزئیات الهام‌گرفته از استایل وسترن، این پیراهن برای پوشیدن روی تیشرت یا به تنهایی عالی است.",
      price: 49.99,
      discountPrice: 44.99,
      countInStock: 15,
      sku: "CAS-DEN-003",
      category: "Top Wear",
      brand: "Street Style",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["آبی روشن", "جین تیره سنگ‌شور"],
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
    {
      _id: 21,
      name: "پیراهن هاوایی طرح‌دار (ریزورت)",
      description:
        "این پیراهن طرح‌دار که برای تابستان طراحی شده، برای تعطیلات یا سفرهای آخر هفته عالی است. دارای تن‌خور آزاد، آستین‌های کوتاه و یقه کوبایی (کمپ) است. طرح استوایی سرتاسری آن حس و حالی شاد و پرانرژی می‌بخشد.",
      price: 29.99,
      discountPrice: 22.99,
      countInStock: 25,
      sku: "PRNT-RES-004",
      category: "Top Wear",
      brand: "Beach Breeze",
      sizes: ["S", "M", "L", "XL"],
      colors: ["طرح استوایی", "هاوایی سرمه‌ای"],
      collections: "Vacation Wear",
      material: "Viscose",
      gender: "Men",
      images: [
        {
          url: "https://picsum.photos/500/500?random=45",
          altText: "Printed Resort Shirt Front View",
        },
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Printed Resort Shirt Back View",
        },
      ],
      rating: 4.4,
      numReviews: 10,
    },
    {
      _id: 31,
      name: "پیراهن جذب با اتوکشی آسان (Easy-Iron)",
      description:
        "یک پیراهن جذب با ویژگی اتوکشی آسان از پارچه پنبه‌ای بافت‌دار با برشی اندامی. دارای یقه برگردان، سجاف دکمه‌دار کلاسیک و برش پشت. آستین‌های بلند و سرآستین‌های دکمه‌دار قابل تنظیم همراه با لبه هلال پایینی.",
      price: 34.99,
      discountPrice: 29.99,
      countInStock: 30,
      sku: "SLIM-EIR-005",
      category: "Top Wear",
      brand: "Urban Chic",
      sizes: ["S", "M", "L", "XL"],
      colors: ["سفید", "خاکستری"],
      collections: "Business Wear",
      material: "Cotton",
      gender: "Men",
      images: [
        {
          url: "https://picsum.photos/500/500?random=47",
          altText: "Slim-Fit Easy-Iron Shirt Front View",
        },
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Slim-Fit Easy-Iron Shirt Front View",
        },
      ],
      rating: 5,
      numReviews: 14,
    },
    {
      _id: 41,
      name: "تیشرت یقه پولوشرت با بافت کشبافت",
      description:
        "یک لباس کلاسیک برای کمد لباس شما؛ این تیشرت پولوشرت دارای یقه و سرآستین‌های کشبافت است. ساخته شده از ۱۰۰٪ پنبه، خنکی و راحتی را در طول روز تضمین می‌کند. برش جذب با سجاف دکمه‌دار در قسمت یقه.",
      price: 24.99,
      discountPrice: 19.99,
      countInStock: 50,
      sku: "POLO-TSH-006",
      category: "Top Wear",
      brand: "Polo Classics",
      sizes: ["S", "M", "L", "XL"],
      colors: ["سفید", "سرمه‌ای", "قرمز"],
      collections: "Casual Wear",
      material: "Cotton",
      gender: "Men",
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Polo T-Shirt Front View",
        },
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Polo T-Shirt Back View",
        },
      ],
      rating: 4.3,
      numReviews: 22,
    },
    {
      _id: 61,
      name: "تیشرت لش (اُوِرسایز) طرح‌دار",
      description:
        "یک تیشرت اورسایز گرافیکی که راحتی را با استایل خیابانی تلفیق می‌کند. با چاپ‌های جسورانه روی سینه، این تیشرت لش حال و هوایی مدرن دارد و برای ست کردن با شلوار جین یا اسلش عالی است.",
      price: 19.99,
      discountPrice: 15.99,
      countInStock: 40,
      sku: "OVS-GRF-007",
      category: "Top Wear",
      brand: "Street Vibes",
      sizes: ["S", "M", "L", "XL"],
      colors: ["مشکی", "خاکستری"],
      collections: "Streetwear",
      material: "Cotton",
      gender: "Men",
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Oversized Graphic T-Shirt Front View",
        },
      ],
      rating: 4.6,
      numReviews: 30,
    },
    {
      _id: 100,
      name: "پیراهن یقه هنلی با تن‌خور معمولی",
      description:
        "نگاهی مدرن به پیراهن کلاسیک هنلی (یقه گرد دکمه‌دار)؛ این مدل دارای سجاف دکمه‌دار و مچ‌های کشبافت است. ساخته شده از مخلوط پنبه نرم با کمی الاستین جهت ایجاد خاصیت کشسانی.",
      price: 22.99,
      discountPrice: 18.99,
      countInStock: 35,
      sku: "REG-HEN-008",
      category: "Top Wear",
      brand: "Heritage Wear",
      sizes: ["S", "M", "L", "XL"],
      colors: ["طوسی ملانژ", "زیتونی", "مشکی"],
      collections: "Casual Wear",
      material: "Cotton Blend",
      gender: "Men",
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Regular-Fit Henley Shirt Front View",
        },
      ],
      rating: 4.5,
      numReviews: 25,
    },
  ];

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300
    scrollRef.current.scrollBy({left : scrollAmount , behaviour : "smooth"})
  }

  const updateScrollButton = () => {
        const container = scrollRef.current;
        if(container){
            const leftScroll = container.scrollLeft
            const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth
            setCanScrollLeft(leftScroll > 0)
            setCanScrollRight(rightScrollable)
        }
        console.log({
          scrollLeft: container.scrollLeft,
          clientWidth: container.clientWidth,
          containerScroolWidth : container.scrollWidth
        });
       
  }
  useEffect(()=>{
    const container = scrollRef.current
    if(container){
        container.addEventListener("scroll" , updateScrollButton)
    }
    updateScrollButton()
    return ()=> container.removeEventListner("scroll" , updateScrollButton)
  },[])

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseMove = (e) => {
    if(!isDragging) return ;
    const x =e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX ;
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = (e) => {

  }

  const handleMouseLeave = (e) =>{
    setIsDragging(false)
  }

  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">جدیدترین محصولات</h2>
        <p className="text-lg text-gray-600 mb-8">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>

        {/* scroll button */}
        <div className="absolute right-0 -bottom-7.5 flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border ${
              canScrollLeft
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded border ${
              canScrollRight
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* scrollable content */}
      <div
        ref={scrollRef}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging ? "cursor-grabbing" : "cursor-grap"}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {newArrivals.map((item, index) => (
          <div
            className="min-w-full sm:min-w-[50%] lg:min-w-[30%] relative"
            key={index}
          >
            <img
              src={item.images[0]?.url}
              alt={item.images[0]?.altText}
              className="w-full h-125 object-cover rounded-lg"
              draggable="false"
            />
            <div className="absolute bottom-0 right-0 left-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link href={`/product/${item._id}`} className="block">
                <h4 className="font-medium">{item.name}</h4>
                <p className="mt-1">${item.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
