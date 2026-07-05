"use client"

import { useSearchParams } from "next/navigation"
import { useState } from "react"

const SortOptions = () => {
  let searchParams = useSearchParams()
  const [searchingParams , setSearchingParams] = useState(searchParams)
  
  const handleSortChange =(e) => {
    const sortBy = e.target.value ;
    searchingParams.set("sortBy" , sortBy)
    setSearchingParams(searchingParams)
  }
  return (
    <div className="mb-4 flex items-center justify-start">
      <select  id="sort"
      onChange={handleSortChange}
      value={searchingParams.get("sortBy")}
      className="border p-2 rounded-md focus:outline-none">
        <option value="" className="">پیش فرض</option>
        <option value="priceAsc" className="">بازه قیمت : پایین به بالا</option>
        <option value="priceDesc" className="">بازه قیمت : بالا به پایین</option>
        <option value="popularity" className="">محبوب ترین </option>
      </select>
    </div>
  )
}

export default SortOptions