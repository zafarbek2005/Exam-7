import { AiOutlineShoppingCart } from "react-icons/ai"; 
import React from 'react';
import './product.scss';
import { Rating } from '@mui/material';
import sumka from './img/sumka.png';
import kr from './img/kr.png';  
import kr2 from './img/kr1.png';
import { NavLink } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import LoadingCart from "../Sklet/Loading_cart";
import { Link } from "react-router-dom";

const Product = ({ data, isLoading }) => {
   
  if (isLoading) {
    return <h1 className='Container'><LoadingCart/></h1>;
  }

  let Data = data?.map((el) => (
    <div className="product__cart" key={el.id}>
      <div className="like">
        <button><CiHeart className="svg" /></button>
        <button><AiOutlineShoppingCart className="svg" /></button>
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

      <div className="catigory">
        <h3>BEST SELLER</h3>
        <div className="tayps">
          <NavLink to="#">
            <button>All</button>
          </NavLink>
          <NavLink to="#">
            <button>Bags</button>
          </NavLink>
          <NavLink to="#">
            <button>Sneakers</button>
          </NavLink>
          <NavLink to="#">
            <button>Belt</button>
          </NavLink>
          <NavLink to="#">
            <button>Sunglasses</button>
          </NavLink>
        </div>
      </div>
      <div className="Wrapper__product Container">
        {Data}
      </div>
    </>
  );
};

export default Product;
