"use client"

import { Suspense } from "react"
import Filter from "./Filter"

const FilterSideBar = () => {
  return (
    <Suspense>
        <Filter />
    </Suspense>
  )
}

export default FilterSideBar