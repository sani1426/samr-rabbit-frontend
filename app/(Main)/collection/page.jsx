"use client"

import backendApi from "@/common/BackendApi"
import ProductGrid from "@/components/main/ProductGrid"
import FilterSideBar from "@/components/shared/FilterSideBar"



import SortOptions from "@/components/shared/SortOptions"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useRef, useState } from "react"
import {FaFilter} from "react-icons/fa"
import { toast } from "sonner"

const page = () => {
  const {searchParams} = useSearchParams()
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
    const getAllProducts = async () => {
      console.log(searchParams);
      const {data} = await axios.get(backendApi.AllProducts.url)
      if (data.success) {
        setProducts(data?.data)
      } else {
        toast.error(data.message)
      }
    }
    useEffect(()=> {
        document.addEventListener("mousedown" , handleClickOutside);
        // clean event listener //
        return () => {
    document.removeEventListener("mousedown", handleClickOutside);
        }
    
    } ,[])
    useEffect(()=>{
      getAllProducts()
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
        <Suspense>
          <FilterSideBar />
        </Suspense>
      </div>
      <div className="grow p-4">
        <h2 className="text-2xl mb-4">همه ی محصولات</h2>

        {/*sort ... */}
        <Suspense>
          <SortOptions />
        </Suspense>
        {/* products grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
}

export default page