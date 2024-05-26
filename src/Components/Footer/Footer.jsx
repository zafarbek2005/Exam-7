import React from 'react'
import './Footer.scss'
import logo from '../Header/img/logo.svg'
import cards from './img/cards.svg'

const Footer = () => {
  return (
    <>
    <footer>
    <div className="footer__section Container">
        <div className="footer__top">
            <div className="footer__logo">
                <img src= {logo} alt="logo" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
            </div>

            <div className="items">
                <h3>Follow Us</h3>
                <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
            </div>
            <div className="items">
                <h3>Follow Us</h3>
                <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
            </div>
        </div>

        <div className="footer__items">
            <div className="f__items">
                <h3>Infomation</h3>
                <p>About Us</p>
                <p>Infomation </p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
            <div className="f__items">
                <h3>Infomation</h3>
                <p>About Us</p>
                <p>Infomation </p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
            <div className="f__items">
                <h3>Infomation</h3>
                <p>About Us</p>
                <p>Infomation </p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
            <div className="f__items">
                <h3>Infomation</h3>
                <p>About Us</p>
                <p>Infomation </p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
        </div>

    <div className="f_line Container"></div>
    <div className="f_cart">
        <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
        <img src={cards} alt="" />
    </div>




    </div>
















    </footer>
    
    
    
    
    
    </>
  )
}

export default Footer