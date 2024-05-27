import React from 'react';
import { useGetDetailProductQuery } from "../../context/Products/Productsapi";
import { useParams } from "react-router-dom";
import './single.scss';
import { Link } from 'react-router-dom';
import img from '../Product/img/kr.png';
import { Rating } from '@mui/material';
import Radio from "@mui/material/Radio";

const Single = () => {
    let { id } = useParams();
    const { data: data2, isLoading: isLoading2 } = useGetDetailProductQuery(id);
    const [selectedValue, setSelectedValue] = React.useState("a");

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
    const controlProps = (item) => ({
      checked: selectedValue === item,
      onChange: handleChange,
      value: item,
      name: "color-radio-button-demo",
      inputProps: { "aria-label": item },
    });
  
    return (
        <>
            <div className="navs">
                <div className="links1">
                    <Link to={"/"}>Home / </Link>
                    <p>Hot Deal / </p>
                    <p>Nike Airmax 270 React</p>
                </div>
            </div>

            <div className="single Container">
                <div className="">
                <div className="single__img">
                    <img src={img} alt="" />
                </div>
                <div className="single__cart">
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                </div>
                </div>

                <div className="txts">
                    <h3>Nike Airmax 270 React</h3>
                    <div className="reviews">
                        <Rating /> <p>0 reviews</p>
                        <p id='p2'>Submit a review</p>
                        <div className="line"></div>
                    </div>

                    <div className="spans">
                        <span>$299,43</span>
                        <span>$534,33</span>
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
                      <div className="size">
                        <p>Size</p>
                        <select>
                          <option>XS</option>
                          <option>M</option>
                          <option>L</option>
                          <option>XL</option>
                          <option>XXL</option>
                        </select>
                      </div>
                      
                </div>
            </div>
        </>
    );
}

export default Single;
