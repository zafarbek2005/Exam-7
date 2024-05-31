import React from 'react'
import Hero from '../Hero/Hero'
import { useGetProductsQuery } from '../../context/Products/Productsapi'
import Product from '../Product/Product'
import Home__bottom from '../Home__botom/Home__bottom'
import { useState } from 'react'

const Home = () => {
  const [ofset, setOfset] = useState(1)
    const { data ,isLoading} = useGetProductsQuery({limit:5*ofset})

  return (
    <>
    <Hero/>
    <Product data={data} isLoading={isLoading} setOfset={setOfset} />
    <Home__bottom/>
    
    
    
    </>
  )
}

export default Home