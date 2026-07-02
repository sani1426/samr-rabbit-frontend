import FeatureSection from "@/components/main/FeatureSection"
import FeaturedCollection from "@/components/main/FeaturedCollection"
import GenderCollectionSection from "@/components/main/GenderCollectionSection"
import Hero from "@/components/main/Hero"
import NewArrivals from "@/components/main/NewArrivals"
import ProductDetails from "@/components/main/ProductDetails"
import ProductGrid from "@/components/main/ProductGrid"

const placeholderProducts = [
  {
    _id : 6 ,
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
    _id : 8 ,
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
    _id : 9 ,
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
  {
    _id : 11 ,
    name: "شلوار جین دنیم",
    description:
      "شلوار جین کلاسیک اسلیم‌فیت با کمی خاصیت کشسانی برای راحتی بیشتر. دارای زیپ و استایل پنج جیب برای ظاهری ماندگار و همیشگی.",
    price: 60,
    discountPrice: 50,
    countInStock: 30,
    sku: "BW-004",
    category: "Bottom Wear",
    brand: "DenimCo",
    sizes: ["S", "M", "L", "XL"],
    colors: ["آبی تیره", "آبی روشن"],
    collections: "Denim Collection",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://picsum.photos/500/500?random=12",
        altText: "Denim Jeans Front View",
      },
    ],
    rating: 4.6,
    numReviews: 22,
  },
  {
    _id : 60 ,
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
    _id : 80 ,
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
    _id : 90 ,
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
  {
    _id : 110 ,
    name: "شلوار جین دنیم",
    description:
      "شلوار جین کلاسیک اسلیم‌فیت با کمی خاصیت کشسانی برای راحتی بیشتر. دارای زیپ و استایل پنج جیب برای ظاهری ماندگار و همیشگی.",
    price: 60,
    discountPrice: 50,
    countInStock: 30,
    sku: "BW-004",
    category: "Bottom Wear",
    brand: "DenimCo",
    sizes: ["S", "M", "L", "XL"],
    colors: ["آبی تیره", "آبی روشن"],
    collections: "Denim Collection",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://picsum.photos/500/500?random=12",
        altText: "Denim Jeans Front View",
      },
    ],
    rating: 4.6,
    numReviews: 22,
  },
];

const HomePage = () => {
  return (
  <>
  <Hero />
  <GenderCollectionSection />
  <NewArrivals />

  {/* best seller section */}
  <h2 className="text-3xl text-center font-bold mb-4">
    محبوب ترین هفته
  </h2>
  <ProductDetails />

  <div className="container mx-auto">
    <h2 className="text-3xl text-center font-bold mb-4">زنانه های پر طرفدار</h2>
    <ProductGrid products={placeholderProducts}/>
  </div>
  <FeaturedCollection />
  <FeatureSection />
  </>
  )
}

export default HomePage
