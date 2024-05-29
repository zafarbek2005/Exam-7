import { AiOutlineShoppingCart } from "react-icons/ai"; 
import React,{memo} from 'react';
import './product.scss';
import { Rating } from '@mui/material';
import sumka from './img/sumka.png';
import kr from './img/kr.png';  
import kr2 from './img/kr1.png';
import { NavLink } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import LoadingCart from "../Sklet/Loading_cart";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux'
import {addToCart} from '../../context/Cart/cartSlice'

const Product = ({ data, isLoading }) => {
  const dispatch = useDispatch()

  if (isLoading) {
    return <h1 className='Container'><LoadingCart/></h1>;
  }

  let Data = data?.map((el) => (
    <div className="product__cart" key={el.id}>
      <div className="like">
        <button><CiHeart className="svg" /></button>
        <button  onClick={() => dispatch(addToCart(el))}><AiOutlineShoppingCart className="svg" /></button>
        <Link to={`products/${el.id}`}>
        <button className="svg" ><IoEyeOutline /></button>
        </Link>
      </div>
      <button id='btn_cart'>{el.rating.count}</button>
      <img src={el.image} alt={el.description} />
            <Link to={`products/${el.id}`}>
            <h3 title={el.title}>{el.title}</h3>
            </Link>
    
      <span id='re'><Rating /></span>
      <div className="price">
        <span>${el.price}</span>
        <span>$534.33</span>
        <span>24% Off</span>
      </div>
    </div>
  ));

  return (
    <>
      <div className="avsolyut__cart">
        <div className="cart3">
          <h3>FS - QUILTED MAXI CROSS BAG</h3>
          <img src={sumka} alt="" />
          <div className="sena">
            <span>$534.33</span>
            <span>24% Off</span>
          </div>
          <span id='q'>$299.43</span>
        </div>
        <div className="cart3">
          <h3>FS - QUILTED MAXI CROSS BAG</h3>
          <img src={kr} alt="" />
          <div className="sena">
            <span>$534.33</span>
            <span>24% Off</span>
          </div>
          <span id='q'>$299.43</span>
        </div>
        <div className="cart3">
          <h3>FS - QUILTED MAXI CROSS BAG</h3>
          <img src={kr2} alt="" />
          <div className="sena">
            <span>$534.33</span>
            <span>24% Off</span>
          </div>
          <span id='q'>$299.43</span>
        </div>
      </div>

      <div className="catigory Container">
        <h3>BEST SELLER</h3>
        <div className="tayps">
          <NavLink to="#">
            <p className="bestsalerbtn">All</p>
          </NavLink>
          <NavLink to="#">
            <p className="bestsalerbtn">Bags</p>
          </NavLink>
          <NavLink to="#">
            <p className="bestsalerbtn">Sneakers</p>
          </NavLink>
          <NavLink to="#">
            <p className="bestsalerbtn">Belt</p>
          </NavLink>
          <NavLink to="#">
            <p className="bestsalerbtn">Sunglasses</p>
          </NavLink>
        </div>
      </div>
      <div className="Wrapper__product Container">
        {Data}
      </div>
    </>
  );
};

export default memo(Product)
