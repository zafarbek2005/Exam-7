import React from 'react'
import './bottom.scss'
import Krasofka from './img/ad.svg'
import icon from './img/icon.svg'
import icon2 from './img/icon2.svg'
import icon3 from './img/icon3.svg'
import Img from './img/img.svg'
import Img2 from './img/img2.svg'
import Img3 from './img/img3.svg'
import Krasofka2 from './img/krr.svg'
import { Rating } from '@mui/material'


const Home__bottom = () => {
  return (
    <>
    <div className="adidas Containerkr">
        <div className="text">
            <h3>Adidas Men Running <br /> Sneakers</h3>
<p>Performance and design. Taken right to the edge.</p>
<button>SHOP NOW</button>
        </div>
     
        <div className="krasofka">
            <img src={Krasofka} alt="Krasofka" />
        </div>
    </div>
    
    <div className="free__shipping Container">
        <div className="free_cart">
            <img src={icon} alt="" />
            <h3>FREE SHIPPING</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="free_cart">
            <img src={icon2} alt="" />
            <h3>100% REFUND</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="free_cart">
            <img src={icon3} alt="" />
            <h3>SUPPORT 24/7</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
    </div>
    
    <div className="LATESt Container">
        <h3 id='lat'>LATEST NEWS</h3>

      <div className="ss">
                <div className="cart">
                        <div className="img2">
                            <img src={Img} alt="" />
                        </div>
                        <div className="text">
                            <span>01 Jan, 2015</span>
                            <h3>Fashion Industry</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                <div className="cart">
                        <div className="img2">
                            <img src={Img2} alt="" />
                        </div>
                        <div className="text">
                            <span>01 Jan, 2015</span>
                            <h3>Best Design Tools</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                <div className="cart">
                        <div className="img2">
                            <img src={Img3} alt="" />
                        </div>
                        <div className="text">
                            <span>01 Jan, 2015</span>
                            <h3>HR Community</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
      </div>
    </div>
        <h3 id='kkk'>FEATURED PRODUCTS</h3>
    <div className="krasofkalar Container">
        <div className="cart4">
            <div className="img5">
                <img src={Krasofka2} alt="Krasofka" />
            </div>
            <div className="txt">
                <h3>Blue Swade Nike <br /> Sneakers</h3>
                <Rating/>
                <div className="senaa">
                    <span>$499</span>
                    <span>$599</span>
                </div>
            </div>
        </div>
        <div className="cart4">
            <div className="img5">
                <img src={Krasofka2} alt="Krasofka" />
            </div>
            <div className="txt">
                <h3>Blue Swade Nike <br /> Sneakers</h3>
                <Rating/>
                <div className="senaa">
                    <span>$499</span>
                    <span>$599</span>
                </div>
            </div>
        </div>
        <div className="cart4">
            <div className="img5">
                <img src={Krasofka2} alt="Krasofka" />
            </div>
            <div className="txt">
                <h3>Blue Swade Nike <br /> Sneakers</h3>
                <Rating/>
                <div className="senaa">
                    <span>$499</span>
                    <span>$599</span>
                </div>
            </div>
        </div>
    </div>
    
    <div className="input Container">
        <input type="text"  placeholder='Search query...'/>
        <button>Search</button>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Home__bottom