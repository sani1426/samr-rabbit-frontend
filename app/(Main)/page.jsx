import backendApi from "@/common/BackendApi"
import FeatureSection from "@/components/main/FeatureSection"
import FeaturedCollection from "@/components/main/FeaturedCollection"
import GenderCollectionSection from "@/components/main/GenderCollectionSection"
import Hero from "@/components/main/Hero"
import NewArrivals from "@/components/main/NewArrivals"
import ProductDetails from "@/components/main/ProductDetails"
import ProductGrid from "@/components/main/ProductGrid"
import Spinner from "@/components/ui/spinner"
import axios from "axios"
import { Suspense } from "react"


  const similarProducts = [
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
  ];

const HomePage = async () => {
  let allProducts = [] ;
  let bestProduct ;
    const response = await axios.get(backendApi.getBestSeller.url);
    const result = await response.data;
    console.log(result);
    if (result.success) {
      bestProduct = result?.data[0]
    }
  const {data} = await axios.get(backendApi.getAllProducts.url , {
    params : {
      gender : "Women"
    }
  })
  if (data?.success) {
    allProducts = data?.data
  }

  return (
    <>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      {/* best seller section */}
      <h2 className="text-3xl text-center font-bold mb-4">محبوب ترین هفته</h2>
      <ProductDetails
        selectedProduct={bestProduct}
        similarProducts={similarProducts}
      />

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          زنانه های پر طرفدار
        </h2>
        <Suspense fallback={<Spinner />}>
          <ProductGrid products={allProducts} />
        </Suspense>
      </div>
      <FeaturedCollection />
      <FeatureSection />
    </>
  );
}

export default HomePage
