import ProductDetails from '@/components/main/ProductDetails'
import React from 'react'

const page = async ({params}) => {
    const {id} = await params
  return (
    <ProductDetails />
  )
}

export default page