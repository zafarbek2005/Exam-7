import React from 'react';
import './wish.scss';
import { useSelector, useDispatch } from 'react-redux';
import { LuHeart } from "react-icons/lu";
import { AiOutlineShoppingCart } from "react-icons/ai"; 
import { Link } from 'react-router-dom'; 
import { IoEyeOutline } from "react-icons/io5";
import { Rating } from '@mui/material';
import { toggleHeart } from '../../context/Heart/heartSlice';
import emty from './emty.png'

const Wishes = () => {
  const wishlist = useSelector(state => state.heart.value);
  const dispatch = useDispatch();

  const handleToggleHeart = (item) => {
    dispatch(toggleHeart(item));
  };
  let wish = wishlist && wishlist.length > 0 ? (
    wishlist.map((item) => (
      <div className="product__cart" key={item.id}>
        <div className="like">
          <button onClick={() => handleToggleHeart(item)}>
            <LuHeart className="likee" style={{ color: wishlist.some(wishItem => wishItem.id === item.id) ? "red" : "inherit" }} />
          </button>
          <button onClick={() => handleAddToCart(item)}>
            <AiOutlineShoppingCart className="svg" />
          </button>
          <Link to={`/products/${item.id}`}>
            <button className="svg">
              <IoEyeOutline />
            </button>
          </Link>
        </div>
        <button id='btn_cart'>{item.rating.count}</button>
        <img src={item.image} alt={item.description} />
        <Link to={`/products/${item.id}`}>
          <h3 title={item.title}>{item.title}</h3>
        </Link>
        <span id='re'><Rating value={item.rating.rate} readOnly /></span>
        <div className="price">
          <span>${item.price}</span>
          <span>$534.33</span>
          <span>24% Off</span>
        </div>
      </div>
    ))
  ) : (
    <div className="empty-wishlist Container">
        <img src= {emty} alt="" />
    </div>
  )


  return (
    <>
      <h3 id='wishh3'>Wishlist</h3>
      <div className="wishes__wrapper Container">
          {wish}
      </div>
    </>
  );
};

export default Wishes;
