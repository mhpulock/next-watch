import React from "react";
import "./Section6.css";
import support from "../../image/24hours.png";
import payment from "../../image/payment.png";
import festival from "../../image/festival.png";
import shipping from "../../image/shipping.png";

const Section6 = () => {
  return (
    <div className="sec6_body">
      <div className="container"></div>
      <div className="row">
        <div className="col-lg-3">
          <img className="py-3" src={shipping} alt="logo" />
          <h4 className="py-2">FREE SHIPPING</h4>
          <p>Order $100 or more and get free shipping offer</p>
        </div>
        <div className="col-lg-3">
          <img className="py-3" src={support} alt="logo" />
          <h4 className="py-2">24 X 7 SUPPORT</h4>
          <p>We provide 24 hours customer support 7 days a week</p>
        </div>
        <div className="col-lg-3">
          <img className="py-3" src={festival} alt="logo" />
          <h4 className="py-2">FESTIVAL OFFER</h4>
          <p>
            We offer discounts at various festivals. Follow our website to get
            discounts
          </p>
        </div>
        <div className="col-lg-3">
          <img className="py-3" src={payment} alt="logo" />
          <h4 className="py-2">ONLINE PAYMENT</h4>
          <p>
            We have secure online payment system for any kind of hassle repair
          </p>
        </div>
      </div>
      <div className="py-5">
        <h3 className="pt-5">NEWSLETTER</h3>
        <div className="sec6_subs">
          <input type="text" placeholder="Enter Your Email" />
          <button>SUBSCRIB</button>
        </div>
      </div>
    </div>
  );
};

export default Section6;
