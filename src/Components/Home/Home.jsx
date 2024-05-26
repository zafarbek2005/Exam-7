import React from 'react'
import Hero from '../Hero/Hero'
import { useGetProductsQuery } from '../../context/Products/Productsapi'
import Product from '../Product/Product'


const Home = () => {
    const { data ,isLoading} = useGetProductsQuery()

  return (
    <>
    <Hero/>
    <Product data={data} isLoading={isLoading}/>
    
    
    
    </>
  )
}

export default Home