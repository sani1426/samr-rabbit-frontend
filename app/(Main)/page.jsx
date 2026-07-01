import GenderCollectionSection from "@/components/main/GenderCollectionSection"
import Hero from "@/components/main/Hero"
import NewArrivals from "@/components/main/NewArrivals"
import ProductDetails from "@/components/main/ProductDetails"



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
  </>
  )
}

export default HomePage
