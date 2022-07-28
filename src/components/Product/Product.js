import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import SingleProduct from "../SingleProduct/SingleProduct";
import Footer from "../Footer/Footer";
import "./Product.css";

const Product = () => {
  const [product, setProducts] = useState([]);
  const [spiners, setSpiners] = useState(false);
  useEffect(() => {
    fetch("https://ancient-springs-87051.herokuapp.com/addproduct")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSpiners(true);
      });
  }, []);

  return (
    <div>
      <div className="product_body">
        {spiners ? (
          <div className="container">
            <div className="section2_custom_row">
              {product.map((product) => (
                <SingleProduct
                  key={product.id}
                  product={product}
                ></SingleProduct>
              ))}
            </div>
          </div>
        ) : (
          <Spinner animation="border" variant="warning" />
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Product;
