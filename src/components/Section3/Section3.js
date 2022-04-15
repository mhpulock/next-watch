import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import "./Section3.css";
import logo from "../../image2/trending-color.png";
import TrendyItem from "../TrendyItem/TrendyItem";

const Section3 = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/addproduct")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const product = products.slice(4, 12);

  return (
    <div className="sec3_body">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="sec3_custom_row py-5">
        {product ? (
          product.map((product) => (
            <TrendyItem key={product.id} product={product}></TrendyItem>
          ))
        ) : (
          <Spinner animation="border" variant="warning" />
        )}
      </div>
    </div>
  );
};

export default Section3;
