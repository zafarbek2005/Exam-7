import { AiOutlineSearch } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import logo from './img/logo.svg';
import { Link, NavLink } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop > lastScrollTop && currentScrollTop > 50) {
      if (!isScrolled) {
        setIsScrolled(true);
      }
    } else if (currentScrollTop < lastScrollTop && currentScrollTop < 50) {
      if (isScrolled) {
        setIsScrolled(false);
      }
    }

    setLastScrollTop(currentScrollTop);
  };

  useEffect(() => {
    const handleScrollDebounced = debounce(handleScroll, 100);
    window.addEventListener('scroll', handleScrollDebounced);
    return () => {
      window.removeEventListener('scroll', handleScrollDebounced);
    };
  }, [lastScrollTop, isScrolled]);

  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  return (
    <>
      <header className={`${isScrolled ? 'shrink' : ''}`}>
        <div className="Navbar Container">
          <div className={`nav__top ${isScrolled ? 'hidden' : ''}`}>
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
                <span><IoPersonOutline /></span>
                <span><IoIosHeartEmpty /></span>
                <span><BsCart2 /><sup>6</sup></span>
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
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </div>
            <div className={`nav__links ${isMobileMenuOpen ? 'open' : ''}`}>
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/bags">BAGS</NavLink>
              <NavLink to="/sneakers">SNEAKERS</NavLink>
              <NavLink to="/belt">BELT</NavLink>
              <NavLink to="/Contact">CONTACT</NavLink>
            </div>
          </div>
        </div>
      </header>
      
    </>
  );
}

export default Navbar;
