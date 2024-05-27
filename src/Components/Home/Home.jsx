import React from 'react'
import Hero from '../Hero/Hero'
import { useGetProductsQuery } from '../../context/Products/Productsapi'
import Product from '../Product/Product'
import Home__bottom from '../Home__botom/Home__bottom'


const Home = () => {
    const { data ,isLoading} = useGetProductsQuery()

  return (
    <>
    <Hero/>
    <Product data={data} isLoading={isLoading}/>
    <Home__bottom/>
    
    
    
    </>
  )
}

export default Home