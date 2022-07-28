import "./PlaceOrder.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import add from "../../image/add.png";
import sub from "../../image/sub.png";

const PlaceOrder = () => {
  const { user } = useAuth();
  const { productId } = useParams();
  const [products, setProducts] = useState({});
  const [quantity, setQuantity] = useState("1");
  const [prices, setPrices] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const orderStatus = "Pending";

  const minus = () => {
    let quantity1 = parseInt(quantity);
    let price1 = parseInt(price);
    if (quantity1 > 1) {
      quantity1 -= 1;
      const price2 = quantity1 * price1;
      const price3 = price2.toString();
      const quantity2 = quantity1.toString();
      setPrices(price3);
      setQuantity(quantity2);
      console.log(quantity2);
    }
  };
  const plus = () => {
    let quantity1 = parseInt(quantity);
    let price1 = parseInt(price);
    quantity1 += 1;
    const price2 = quantity1 * price1;
    const price3 = price2.toString();
    const quantity2 = quantity1.toString();
    setPrices(price3);
    setQuantity(quantity2);
    console.log(quantity2);
  };
  const onSubmit = (data) => {
    data.productId = _id;
    data.email = user.email;
    data.Name = user.displayName;
    data.orderStatus = orderStatus;
    data.img = img;
    data.model = model;
    data.shortdes = shortdes;
    data.price = totalPrice;
    data.quantity = quantity;
    data.rating = rating;
    data.description = description;
    data.date = Date();

    axios
      .post("https://ancient-springs-87051.herokuapp.com/myorder", data)
      .then((res) => {
        if (res.data.insertedId) {
          // sweet alert2

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Order Completed Succesfully",
            showConfirmButton: false,
            timer: 1000,
          });
          reset();
        }
      });
  };

  useEffect(() => {
    const url = "https://ancient-springs-87051.herokuapp.com/addproduct";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const result = data.find((product) => product._id == productId);
        console.log(data);
        setProducts(result);
      });
  }, []);

  const { _id, img, model, shortdes, price, rating, description } = products;
  const totalPrice = prices ? prices : price;

  return (
    <div className="service_body ">
      <div className="">
        <div className="row p-5">
          <div className="col-lg-5 bookingCard">
            <div className="section2_cart">
              <img className="section2_image" src={img} alt="logo" />
              <div className="cart_b_height">
                <h6 className=" ">{model}</h6>
                <h6 className=" ">{shortdes}</h6>
              </div>

              {rating == 1 ? (
                <div>
                  <FontAwesomeIcon
                    className="single_icon_color high"
                    icon={faStar}
                  />
                  <FontAwesomeIcon className=" high" icon={faStar} />
                  <FontAwesomeIcon className=" high" icon={faStar} />
                  <FontAwesomeIcon className=" high" icon={faStar} />
                  <FontAwesomeIcon className="high" icon={faStar} />
                </div>
              ) : rating == 2 ? (
                <div>
                  <FontAwesomeIcon
                    className="single_icon_color high"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="single_icon_color high"
                    icon={faStar}
                  />
                  <FontAwesomeIcon className=" high" icon={faStar} />
                  <FontAwesomeIcon className=" high" icon={faStar} />
                  <FontAwesomeIcon className="high" icon={faStar} />
                </div>
              ) : rating == 3 ? (
                <div>
                  <FontAwesomeIcon
                    className="single_icon_color high"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="single_icon_color high"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="single_icon_color high"
                    icon={faStar}
                  />
                  <FontAwesomeIcon className=" high" icon={faStar} />
                  <FontAwesomeIcon className="high" icon={faStar} />
                </div>
              ) : rating == 4 ? (
                <div>
                  <FontAwesomeIcon
                    className="single_icon_color high"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="single_icon_color high"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="single_icon_color high"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="single_icon_color high"
                    icon={faStar}
                  />
                  <FontAwesomeIcon className="high" icon={faStar} />
                </div>
              ) : rating == 5 ? (
                <div>
                  <FontAwesomeIcon
                    className="single_icon_color high"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="single_icon_color high"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="single_icon_color high"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="single_icon_color high"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="single_icon_color high"
                    icon={faStar}
                  />
                </div>
              ) : (
                <div></div>
              )}

              <h5 className="pb-2">
                PRICE : <span className="sec2_dolar">$</span>
                <span className="sec2_price">{price}</span>
              </h5>
            </div>
          </div>
          <div className="col-lg-7">
            <div>
              <h4 className="orderTitle">
                BEFORE PLACING AN ORDER MUST FILL-UP THE FORM
              </h4>
              <br />
              <div className="d-flex justify-content-center align-items-center">
                <div>
                  <h5>Quantity : </h5>
                </div>
                <div className="d-flex ps-2">
                  <button className="quantity" onClick={minus}>
                    <img src={sub} alt="sub" />
                  </button>
                  <h5 className="px-3">{quantity}</h5>
                  <button className="quantity" onClick={plus}>
                    <img src={add} alt="add" />
                  </button>
                </div>
                <div className="ps-5">
                  <h5>
                    PRICE : <span className="sec2_dolar">$</span>{" "}
                    <span className="sec2_price">{totalPrice}</span>
                  </h5>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div>
                  <div className="addproductForm">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        type="text"
                        {...register("fullName", { required: true })}
                        placeholder="Enter Your Full Name"
                      />
                      <input
                        type="text"
                        {...register("cityname", { required: true })}
                        placeholder="Enter Your City Name"
                      />
                      <input
                        type="text"
                        {...register("address", { required: true })}
                        placeholder="Enter Your Full Address"
                      />
                      <input
                        type="number"
                        {...register("zip", { required: true })}
                        placeholder="Enter Your Zip Code"
                      />
                      <input
                        type="number"
                        {...register("mobile", { required: true })}
                        placeholder="Enter Your Mobile Number"
                      />

                      <input
                        className="ordersubmitButton"
                        type="submit"
                        value="PLACE ORDER"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="description">
          <h3>
            <span>{model}</span> <span>{shortdes}</span>
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
