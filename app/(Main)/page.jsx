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




const HomePage = async () => {
  let allProducts = [] ;
  let bestProduct ;
  let similarProducts
  const {data} = await axios.get(backendApi.getAllProducts.url , {
    params : {
      gender : "Women"
    }
  })
  if (data?.success) {
    allProducts = data?.data
  }
  const response = await axios.get(backendApi.getBestSeller.url)
  const result = response.data
  if (result.success) {
    bestProduct = result.data
    const res = await axios.get(`${backendApi.getSimilars.url}/${id}`)
    const ans = res?.data
    if (ans.success) similarProducts = ans.data
  }
 

  return (
    <>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      {/* best seller section */}
      <h2 className="text-3xl text-center font-bold mb-4">محبوب ترین هفته</h2>
      <ProductDetails selectedProduct={bestProduct} similarProducts={similarProducts} />

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          زنانه های پر طرفدار
        </h2>
        <Suspense fallback ={<Spinner />}>
          <ProductGrid products={allProducts} />
        </Suspense>
      </div>
      <FeaturedCollection />
      <FeatureSection />
    </>
  );
}

export default HomePage
