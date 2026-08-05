import backendApi from '@/common/BackendApi';
import ProductDetails from '@/components/main/ProductDetails'
import axios from 'axios';
import React from 'react'

const page = async ({params}) => {
    const {id} = await params
 let selectedProduct;
 let similarProducts;;
      const { data } = await axios.get(
        `${backendApi.getProductDetails.url}/${id}`
      );
      const response = await axios.get(`${backendApi.getSimilars.url}/${id}`);
      const result = response?.data;
      if (data?.success) selectedProduct = data?.data 
      if (result?.success) similarProducts = result?.data ;

  return (
    <ProductDetails
      selectedProduct={selectedProduct}
      similarProducts={similarProducts}
    />
  );
}

export default page