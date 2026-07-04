"use client"

import ProductGrid from "@/components/main/ProductGrid"
import FilterSideBar from "@/components/shared/FilterSidebar";

import SortOptions from "@/components/shared/SortOptions"
import { useEffect, useRef, useState } from "react"
import {FaFilter} from "react-icons/fa"

const page = () => {
    const [products , setProducts] = useState([])
    const sidebarRef = useRef(null)
    const [isSidebarOpen , setIsSidebarOpen]=useState(false)
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
    const handleClickOutside = (e) => {
        if(sidebarRef.current  &&  !sidebarRef.current.contains(e.target)){
            setIsSidebarOpen(false)
            console.log(isSidebarOpen);
        }
    };
    useEffect(()=> {
        document.addEventListener("mousedown" , handleClickOutside);
        // clean event listener //
        document.removeEventListener("mousedown" , handleClickOutside);
    } )
    useEffect(()=>{
        setTimeout(() => {
            const fetchProducts = [
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
                colors: ["قرمز", "سرمه ای"],
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
                colors: ["طوسی", "زیتونی", "مشکی"],
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
              {
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
                colors: ["زغالی", "سبز تیره", "سرمه‌ای"],
                collections: "Winter Essentials",
                material: "Cotton",
                gender: "Men",
                images: [
                  {
                    url: "https://picsum.photos/500/500?random=7",
                    altText: "Long-Sleeve Thermal Tee Front View",
                  },
                ],
                rating: 4.4,
                numReviews: 18,
              },
              {
                name: "تیشرت کلاسیک یقه هفت",
                description:
                  "یک تیشرت یقه هفت کلاسیک برای استفاده روزمره. این تیشرت با تن‌خور معمولی از پنبه خنک ساخته شده و طراحی ساده و تمیزی با یقه هفت جذاب دارد. پارچه سبک و بافت نرم آن را برای استایل‌های کژوال عالی کرده است.",
                price: 14.99,
                discountPrice: 11.99,
                countInStock: 60,
                sku: "VNECK-CLS-010",
                category: "Top Wear",
                brand: "Everyday Comfort",
                sizes: ["S", "M", "L", "XL"],
                colors: ["سفید", "مشکی", "سرمه‌ای"],
                collections: "Basics",
                material: "Cotton",
                gender: "Men",
                images: [
                  {
                    url: "https://picsum.photos/500/500?random=8",
                    altText: "V-Neck Classic T-Shirt Front View",
                  },
                ],
                rating: 4.7,
                numReviews: 28,
              },
              {
                name: "شلوار اسلش جذب (اسلیم فیت)",
                description:
                  "شلوار اسلش جذب با کمر کشی بنددار. دارای مچ‌های کشبافت و جیب‌های جانبی. ایده‌آل برای گشت‌وگذارهای روزمره یا ورزش کردن.",
                price: 40,
                discountPrice: 35,
                countInStock: 20,
                sku: "BW-001",
                category: "Bottom Wear",
                brand: "ActiveWear",
                sizes: ["S", "M", "L", "XL"],
                colors: ["مشکی", "خاکستری", "سرمه‌ای"],
                collections: "Casual Collection",
                material: "Cotton Blend",
                gender: "Men",
                images: [
                  {
                    url: "https://picsum.photos/500/500?random=9",
                    altText: "Slim Fit Joggers Front View",
                  },
                ],
                rating: 4.5,
                numReviews: 12,
              },
              {
                name: "شلوار اسلش کارگو (شش‌جیب)",
                description:
                  "شلوار اسلش کارگو با تن‌خور آزاد و جیب‌های متعدد برای کاربرد بیشتر. دارای کمر بنددار و دم‌پای کش‌دار برای ظاهری مدرن.",
                price: 45,
                discountPrice: 40,
                countInStock: 15,
                sku: "BW-002",
                category: "Bottom Wear",
                brand: "UrbanStyle",
                sizes: ["S", "M", "L", "XL"],
                colors: ["زیتونی", "مشکی"],
                collections: "Urban Collection",
                material: "Cotton",
                gender: "Men",
                images: [
                  {
                    url: "https://picsum.photos/500/500?random=10",
                    altText: "Cargo Joggers Front View",
                  },
                ],
                rating: 4.7,
                numReviews: 20,
              },
              {
                name: "شلوار خانگی خمره‌ای (مخروطی)",
                description:
                  "شلوار ورزشی و خانگی خمره‌ای طراحی شده برای راحتی. کمر کشی با بند قابل تنظیم، عالی برای استراحت در خانه یا فعالیت‌های ورزشی.",
                price: 35,
                discountPrice: 30,
                countInStock: 25,
                sku: "BW-003",
                category: "Bottom Wear",
                brand: "ChillZone",
                sizes: ["S", "M", "L", "XL"],
                colors: ["خاکستری", "زغالی", "آبی"],
                collections: "Lounge Collection",
                material: "Fleece",
                gender: "Men",
                images: [
                  {
                    url: "https://picsum.photos/500/500?random=11",
                    altText: "Tapered Sweatpants Front View",
                  },
                ],
                rating: 4.3,
                numReviews: 18,
              },
            ];
            setProducts(fetchProducts)
        }, 1000);
    },[])
  return (
    <div className="flex flex-col lg:flex-row ">
      {/* mobile Filter button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="ml-2" /> فیلترها
      </button>

      {/* filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } fixed inset-y-0 z-50 right-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSideBar />
      </div>
      <div className="grow p-4">
        <h2 className="text-2xl mb-4">همه ی محصولات</h2>

        {/*sort ... */}
        <SortOptions />

        {/* products grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
}

export default page