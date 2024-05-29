import React, { useState, memo } from 'react';
import { useGetDetailProductQuery } from "../../context/Products/Productsapi";
import { useParams } from "react-router-dom";
import './single.scss';
import { Link } from 'react-router-dom';
import Radio from "@mui/material/Radio";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart, CiFacebook, CiTwitter } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import kr from '../Product/img/kr.png';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Rating } from '@mui/material';
import { AiOutlineShoppingCart } from "react-icons/ai"; 
import { IoEyeOutline } from "react-icons/io5";

const Single = ({ data }) => {
  console.log(data);
  let { id } = useParams();
  const { data: product, isLoading: isLoadingProduct } = useGetDetailProductQuery(id);
  const [selectedValue, setSelectedValue] = useState("a");
  const [count, setCount] = useState(1);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count > 1 ? count - 1 : 1);
  const totalPrice = (product?.price || 0) * count;

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  if (isLoadingProduct) {
    return (
      <div className="single Container">
        <div className="skeleton-wrapper">
          <Skeleton height={350} width={400} />
          <div className="txts">
            <h3><Skeleton width={300} /></h3>
            <div className="reviews">
              <Skeleton width={100} height={24} />
            </div>
            <div className="spans">
              <Skeleton width={60} height={24} />
              <Skeleton width={60} height={24} />
              <Skeleton width={60} height={24} />
            </div>
            <div className="single_items">
              <div className="pp">
                <Skeleton width={100} height={24} />
                <Skeleton width={100} height={24} />
              </div>
              <div className="ppp">
                <Skeleton width={100} height={24} />
                <Skeleton width={100} height={24} />
              </div>
            </div>
            <div className="lineth">
              <Skeleton width="100%" height={2} />
            </div>
            <div className="colors">
              <Skeleton width={100} height={24} />
            </div>
            <div className="size">
              <Skeleton width={100} height={24} />
            </div>
            <div className="btns">
              <div className="inc">
                <Skeleton width={40} height={40} />
                <Skeleton width={40} height={40} />
              </div>
              <div className="cas">
                <Skeleton width={100} height={40} />
                <Skeleton width={40} height={40} />
              </div>
            </div>
            <div className="socialmedia">
              <Skeleton width={150} height={40} />
              <Skeleton width={150} height={40} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const SingleProducts = data?.slice(0, 4).map((el) => (
    <div className="product__cart" key={el.id}>
      <div className="like">
        <button><CiHeart className="svg" /></button>
        <button><AiOutlineShoppingCart className="svg" /></button>
        <Link to={`products/${el.id}`}>
          <button className="svg"><IoEyeOutline /></button>
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
      <div className="navs">
        <div className="links1">
          <Link to="/">Home / </Link>
          <p>Hot Deal / </p>
          <p>{product.title}</p>
        </div>
      </div>

      <div className="single Container">
        <div className="">
          <div className="single__img">
            <img src={product?.image} alt={product?.description} />
          </div>
          <div className="single__cart">
            {[...Array(4)].map((_, index) => (
              <img key={index} src={product?.image} alt={`product-image-${index}`} />
            ))}
          </div>
        </div>

        <div className="txts">
          <h3>{product?.title}</h3>
          <div className="reviews">
            <Rating /> <p>reviews</p>
            <p id='p2'>Submit a review</p>
            <div className="line"></div>
          </div>

          <div className="spans">
            <span>${totalPrice.toFixed(2)}</span>
            <span>$534.33</span>
            <span>24% Off</span>
          </div>

          <div className="single_items">
            <div className="pp">
              <p>Availability:</p>
              <p>Category:</p>
              <p>Free shipping</p>
            </div>
            <div className="ppp">
              <p>In stock</p>
              <p>Accessories</p>
            </div>
          </div>

          <div className="lineth"></div>

          <div className="colors">
            <p>Select Color:</p>
            <div>
            <div>
                    <Radio
                      {...controlProps("a")}
                      sx={{
                        color: "red",
                        "&.Mui-checked": {
                          color: "red",
                        },
                      }}
                    />
                    <Radio
                      {...controlProps("c")}
                      sx={{
                        color: "blue",
                        "&.Mui-checked": {
                          color: "blue",
                        },
                      }}
                    />
                    <Radio
                      {...controlProps("b")}
                      sx={{
                        color: "black",
                        "&.Mui-checked": {
                          color: "black",
                        },
                      }}
                    />

                    <Radio
                      {...controlProps("e")}
                      sx={{
                        color: "yellow",
                        "&.Mui-checked": {
                          color: "yellow",
                        },
                      }}
                    />
                  </div>

            </div>
          </div>

          <div className="size">
            <p>Size</p>
            <select>
              {['XS', 'M', 'L', 'XL', 'XXL'].map((size, index) => (
                <option key={index}>{size}</option>
              ))}
            </select>
          </div>

          <div className="btns">
            <div className="inc">
              <button id='b1' onClick={decrementCount} disabled={count <= 1}>-</button>
              <span>{count}</span>
              <button id='b1' onClick={incrementCount}>+</button>
            </div>

            <div className="cas">
              <button ><IoCartOutline /> Add To Cart</button>
              <button ><CiHeart /></button>
            </div>
          </div>

          <div className="socialmedia">
            <button id='b2'><CiFacebook /> Share on Facebook</button>
            <button id='b3'><CiTwitter /> Share on Twitter</button>
          </div>
        </div>

        <div className="single_week">
          <h2>BEST SELLER</h2>
          <Swiper
            cssMode={true}
            navigation={false}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {[...Array(4)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="alr">
                  <img src={kr} alt="Best Seller" />
                  <div className="ikon">
                    <div className="ikon_all">
                      <Rating />
                    </div>
                  </div>
                  <div className="pri">
                    <p>$499 <span>$599</span></p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="teex">
          <div className="navs1">
            <p>Product Information</p>
            <p>Reviews</p>
            <p>Another tab</p>
          </div>
          <div className="lrr">
            <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p> <br />
            <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p> <br />
            <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
          </div>
        </div>
      </div>    

      <h3 id='sen' className='Container'>RELATED PRODUCTS</h3>
      <div className="Wrapper__product Container">
        {SingleProducts}
      </div>
    </>
  );
};

export default memo(Single);
  