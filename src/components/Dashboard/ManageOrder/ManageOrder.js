import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import "./ManageOrder.css";
import ManageOrderItem from "../ManageOrderItem/ManageOrderItem";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import TrackOrder from "../TrackOrder/TrackOrder";

const ManageOrder = () => {
  const [product, setProducts] = useState([]);
  const [trackitem, setTrackitem] = useState([]);
  const [count, setCount] = useState("");
  const [spiners, setSpiners] = useState(false);
  const [searchDate, setSearchDate] = useState(new Date());
  const [updateSatus, setUpdateSatus] = useState("Pending");
  const [searchItem, setSearchItem] = useState(false);

  const [track, setTrack] = useState("false");
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const startDates = String(searchDate);
    const date = startDates.slice(0, 15);
    fetch("https://ancient-springs-87051.herokuapp.com/myorder")
      .then((res) => res.json())
      .then((data) => {
        const result = data.filter(
          (product) =>
            product.date.slice(0, 15) == date &&
            product.orderStatus == updateSatus
        );
        let totalcount = result.length;
        setCount(totalcount);
        setProducts(result);
        setSpiners(true);
      });
  }, []);

  const buttonclick = () => {
    const startDates = String(searchDate);
    const date = startDates.slice(0, 15);
    fetch("https://ancient-springs-87051.herokuapp.com/myorder")
      .then((res) => res.json())
      .then((data) => {
        const result = data.filter(
          (product) =>
            product.date.slice(0, 15) == date &&
            product.orderStatus == updateSatus
        );
        let totalcount = result.length;
        setCount(totalcount);
        setProducts(result);
        setSpiners(true);
      });
  };

  const handleSearchOrder = (dates) => {
    setTrack("false");
    const startDates = String(dates);
    const date = startDates.slice(0, 15);
    fetch("https://ancient-springs-87051.herokuapp.com/myorder")
      .then((res) => res.json())
      .then((data) => {
        const result = data.filter(
          (product) =>
            product.date.slice(0, 15) == date &&
            product.orderStatus == updateSatus
        );
        let totalcount = result.length;
        setCount(totalcount);
        setProducts(result);
        setSpiners(true);
      });
  };
  console.log(typeof product);
  const handleStatus = (e) => {
    const status1 = e.target.value;
    setUpdateSatus(status1);
  };
  const searchButton = () => {
    setTrack("false");
    const startDates = String(searchDate);
    const date = startDates.slice(0, 15);
    fetch("https://ancient-springs-87051.herokuapp.com/myorder")
      .then((res) => res.json())
      .then((data) => {
        const result = data.filter(
          (product) =>
            product.date.slice(0, 15) == date &&
            product.orderStatus == updateSatus
        );
        let totalcount = result.length;
        setCount(totalcount);
        setProducts(result);
        setSpiners(true);
      });
  };

  const handleSearchItem = (e) => {
    const searchItems = e.target.value;
    setSearchItem(searchItems);
  };

  // only for track searching
  const trackButton = () => {
    setTrack("true");
    console.log("type : " + typeof searchItem);
    fetch("https://ancient-springs-87051.herokuapp.com/myorder")
      .then((res) => res.json())
      .then((data) => {
        const result = data.filter((product) => product._id == searchItem);
        let totalcount = result.length;
        setCount(totalcount);
        setTrackitem(result);
        setSpiners(true);
        document.getElementById("p_id").reset();
      });
  };

  return (
    <div className="products_body">
      <div className="row d-flex justify-content-center align-items-center py-1 px-4 ">
        <div className="col-lg-2"></div>
        <div className="col-lg-2">
          {/* <button className="order_search_button" onClick={buttonclick}>
            Search
          </button> */}
          <h5 className="text-lg-end">SELECT DATE :</h5>
        </div>
        <div className="col-lg-2 ">
          <DatePicker
            className="datepicker"
            selected={searchDate}
            onChange={(date) => {
              setSearchDate(date);
              handleSearchOrder(date);
            }}
            dateFormat="dd/MM/yyyy"
            // minDate={startDate}
            showYearDropdown
          />
        </div>

        <div className="col-lg-4 ">
          <select
            name="status"
            className="select_item_style"
            onChange={(e) => handleStatus(e)}
          >
            {/* <option>-SELECT-</option> */}
            <option value="Pending">PENDING</option>
            <option value="Approved">APPROVE</option>
          </select>
          <button className="search_button_style" onClick={searchButton}>
            SEARCH
          </button>
        </div>
        <div className="col-lg-2"></div>
      </div>

      {/* TrackOrder */}

      <div className="row d-flex justify-content-center align-items-center py-1 px-4 ">
        <div className="col-lg-4">
          <h5>TOTAL ORDER : {count} </h5>
        </div>
        <div className="col-lg-4 ">
          <form id="p_id">
            <input
              className="track_input"
              type="text"
              {...register("fullName", { required: true })}
              placeholder="Search by P-ID"
              onChange={(e) => handleSearchItem(e)}
            />
          </form>
        </div>

        <div className="col-lg-3 bigsrceen">
          <button className="track_button" onClick={trackButton}>
            TRACK DETAILS
          </button>
        </div>
        <div className="col-lg-1"></div>

        {/* <input className="ordersubmitButton" type="submit" value="SEARCH" /> */}
      </div>
      <hr />
      {spiners ? (
        <div className="container">
          <div className="manage_custom_row">
            {track == "false" &&
              product.map((product) => (
                <ManageOrderItem
                  key={product.id}
                  product={product}
                  buttonclick={buttonclick}
                ></ManageOrderItem>
              ))}
          </div>
          {track == "true" &&
            trackitem.map((trackitem) => (
              <TrackOrder key={trackitem.id} trackitem={trackitem}></TrackOrder>
            ))}
        </div>
      ) : (
        <Spinner animation="border" variant="warning" />
      )}
    </div>
  );
};

export default ManageOrder;
