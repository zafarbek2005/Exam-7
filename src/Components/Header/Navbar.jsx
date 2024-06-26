import { AiOutlineSearch } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import React, { useState } from 'react';
import './Navbar.scss';
import logo from './img/logo.svg';
import { Link, NavLink } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import { IoHomeOutline } from "react-icons/io5";

const Navbar = () => {
  const [toggle, settogle] = useState(false);
  const carts = useSelector(s => s.cart.value);
  const Wishes = useSelector(s => s.heart.value);
  const handleMenuToggle = () => {
    settogle(!toggle);
  };

  return (
    <header>
      <div className="Navbar Container">
        <div className="nav__top">
          <div className="select">
            <select>
              <option value="en">EN</option>
              <option value="uz">UZ</option>
            </select>
            <select>
              <option value="usd">USD</option>
              <option value="usz">USZ</option>
            </select>
          </div>
          <div className="items">
            <div className="hearts">
              <Link to={'/'}> 
                <span className="homesvg"><IoHomeOutline /></span>
              </Link> 
              <Link to={'/register'}> 
                <span><IoPersonOutline /></span>
              </Link> 
              <Link to={"/Wishes"}>
                <span><IoIosHeartEmpty /><sup id="navsup">{Wishes.length}</sup></span>
              </Link>
              <Link to={"/ProductCart"}>
                <span><BsCart2 /><sup id="navsup">{carts.length}</sup></span>
              </Link>
            </div>
            <span id="items__none"> Items</span>
            <span>$0.00 <AiOutlineSearch /></span>
          </div>
        </div>
        <div className="nav_bottom">
          <div className="nav__logo">
            <Link to={"/"}> <img src={logo} alt="Logo" /></Link>
          </div>
          <div className="nav__toggle" onClick={handleMenuToggle}>
            {toggle ? <FiX /> : <FiMenu />}
          </div>
          <div className={`nav__links ${toggle ? 'open' : ''}`}>
            <NavLink to="/bags">BAGS</NavLink>
            <NavLink to="/sneakers">SNEAKERS</NavLink>
            <NavLink to="/belt">BELT</NavLink>
            <NavLink to="/Contact">CONTACT</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
