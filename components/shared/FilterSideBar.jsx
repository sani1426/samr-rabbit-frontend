"use client";

import { mapColor, mapMaterial } from "@/utils/AppUtility";
import { useSearchParams, useRouter } from "next/navigation";

import { useEffect, useState } from "react";

const FilterSideBar = () => {
  const [searchingParams , setSearchingParams] = useSearchParams();
  const router = useRouter()
  const [filter, setFilter] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    brand: [],
    material: [],
    minPrice: 0,
    maxPrice: 100,
  });
  const [priceeRange, setPriceRange] = useState(0, 100);
  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Beige",
    "Navy",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyester",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
  ];
  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle",
  ];
  const genders = ["Men", "Women"];
  useEffect(() => {
    const params = Object.fromEntries([...searchingParams]);
    setFilter({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRange([0, params.maxPrice || 100]);
  }, [searchingParams]);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filter };
    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }
    setFilter(newFilters);
    updateUrl(newFilters)
  };

  const updateUrl = (newFilters) => {
    const params = new URLSearchParams()
    Object.keys(newFilters).forEach((key) => {
      if(Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key , newFilters[key].join(","))
      }else if(newFilters[key]) {
        params.append(key , newFilters[key])
      }
    })
    setSearchingParams(params)
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">فیلتر</h3>

      {/* category filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          دسته بندی
        </label>
        {categories.map((cat, index) => (
          <div key={index} className="flex items-center mb-1 gap-1">
            <input
              type="radio"
              name="category"
              value={cat}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-400 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">
              {cat === "Top Wear" ? "بالا تنه" : "پایین تنه"}
            </span>
          </div>
        ))}
      </div>
      {/* Gender filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">جنسیت</label>
        {genders.map((gen, index) => (
          <div key={index} className="flex items-center mb-1 gap-1">
            <input
              type="radio"
              name="gender"
              value={gen}
              onChange={handleFilterChange}
              className="mr-2 h-4 w-4 text-blue-400 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">
              {gen === "Men" ? "مردانه" : "زنانه"}
            </span>
          </div>
        ))}
      </div>
      {/* Color filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">رنگبندی</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((col, index) => (
            <button
              key={index}
              className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105"
              style={{ backgroundColor: col.toLowerCase() }}
              name="color"
              value={mapColor(col)}
              onClick={(e)=> handleFilterChange(e)}
            ></button>
          ))}
        </div>
      </div>

      {/* size filter */}

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">سایز</label>
        {sizes.map((siz, index) => (
          <div className="flex items-center mb-1 gap-1" key={index}>
            <input
              type="checkbox"
              name="size"
              value={siz}
              onChange={handleFilterChange}
              className="ml-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{siz}</span>
          </div>
        ))}
      </div>

      {/* material filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">متریال</label>
        {materials.map((mat, index) => (
          <div className="flex items-center mb-1 gap-1" key={index}>
            <input
              type="checkbox"
              name="material"
              value={mat}
              onChange={handleFilterChange}
              className="ml-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{mapMaterial(mat)}</span>
          </div>
        ))}
      </div>
      {/* brand filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">برند</label>
        {brands.map((bra, index) => (
          <div className="flex items-center mb-1 gap-1" key={index}>
            <input
              type="checkbox"
              name="brand"
              value={bra}
              onChange={handleFilterChange}
              className="ml-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{bra}</span>
          </div>
        ))}
      </div>

      {/* price range filter */}
      <div className="mb-8">
        <label className="block text-gray-600 font-medium mb-2">
          بازه قیمتی
        </label>
        <input
          type="range"
          name="priceRange"
          min={0}
          max={100}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span className="$0"></span>
          <span className="">${priceeRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSideBar;
