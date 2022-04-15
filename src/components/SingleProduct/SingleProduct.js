import React from "react";
import "./SingleProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleProduct = (props) => {
  const { _id, img, model, shortdes, price, rating } = props.product;

  return (
    <div className="section2_cart">
      <img className="section2_image" src={img} alt="logo" />
      <div className="cart_b_height">
        <h6 className=" ">{model}</h6>
        <h6 className=" ">{shortdes}</h6>
      </div>

      {rating == 1 ? (
        <div>
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className=" high" icon={faStar} />
          <FontAwesomeIcon className=" high" icon={faStar} />
          <FontAwesomeIcon className=" high" icon={faStar} />
          <FontAwesomeIcon className="high" icon={faStar} />
        </div>
      ) : rating == 2 ? (
        <div>
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className=" high" icon={faStar} />
          <FontAwesomeIcon className=" high" icon={faStar} />
          <FontAwesomeIcon className="high" icon={faStar} />
        </div>
      ) : rating == 3 ? (
        <div>
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className=" high" icon={faStar} />
          <FontAwesomeIcon className="high" icon={faStar} />
        </div>
      ) : rating == 4 ? (
        <div>
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className="high" icon={faStar} />
        </div>
      ) : rating == 5 ? (
        <div>
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
        </div>
      ) : (
        <div></div>
      )}

      <h5 className="pb-2">
        PRICE : <span className="sec2_dolar">$</span>
        <span className="sec2_price">{price}</span>
      </h5>
      <Link to={`/product/${_id}`}>
        <button className="section2_button">ORDER</button>
      </Link>
    </div>
  );
};

export default SingleProduct;
