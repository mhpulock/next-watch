import React from "react";
import "./TrendyItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TrendyItem = (props) => {
  const { _id, img, model, shortdes, price, rating } = props.product;

  return (
    <div className="sec3_cart p-2">
      <div>
        <img className="sec3_logo" src={img} alt="logo" />
      </div>
      <div>
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
        <div>
          <small>{model}</small>
        </div>
        <div>
          <h5>
            PRICE : <span className="trendy_dolar">$</span>
            <span className="trendy_price">{price}</span>
          </h5>
        </div>
        <div>
          <Link to={`/product/${_id}`}>
            <button className="sec3_order">ORDER</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendyItem;
