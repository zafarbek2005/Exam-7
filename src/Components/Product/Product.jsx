import React from 'react'
import './product.scss'
import { Rating } from '@mui/material'

const Product = ({data,isLoading}) => {
    if(isLoading){
        return <h1 className='Container'>Loading...</h1>
    }
    let Data = data?.map((el) => (
        <div className="product__cart" key={el.id}>
        <button id='btn_cart'>{el.rating.count}</button>
        <img src= {el.image} alt={el.description} />
        <h3 title={el.title}>{el.title}</h3>
        <span id='re'><Rating/></span>
        <div className="price"> 
        <span>${el.price}</span>
        <span>$534,33</span>
        <span>24% Off</span>
        </div>
    </div>
    ) )

  return (
   <>
   <div className="Wrapper__product Container">
            {Data}
   </div>
   
   
   
   
   
   </>
  )
}

export default Product