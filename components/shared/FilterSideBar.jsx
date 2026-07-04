"use client"

import { Suspense } from "react"
import Filter from "./Filter"

const FilterSideBar = () => {
  return (
    <>
      <Suspense fallback={<h1>loading...</h1>}>
        <Filter />
      </Suspense>
    </>
  );
}

export default FilterSideBar