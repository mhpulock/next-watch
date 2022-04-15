import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./AddProduct.css";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/addproduct", data).then((res) => {
      if (res.data.insertedId) {
        // sweet alert2
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Added Succesfully",
          showConfirmButton: false,
          timer: 1000,
        });
        reset();
      }
    });
  };

  return (
    <div className="d-flex justify-content-center">
      <div>
        <h1>Add a New Product Details</h1>
        <br />
        <div className="d-flex justify-content-center">
          <div>
            <div className="addProductForm">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("img", { required: true })}
                  placeholder="Past Image URL"
                />
                <input
                  {...register("model", { required: true })}
                  placeholder="Product Model"
                  type="text"
                />
                <input
                  {...register("shortdes", { required: true })}
                  placeholder="Product Short Description"
                  type="text"
                />
                <input
                  {...register("price", { required: true })}
                  type="number"
                  placeholder="Enter Price"
                />
                <input
                  {...register("rating", { required: true })}
                  type="number"
                  min="1"
                  max="5"
                  placeholder="Enter Rating (out of 5)"
                />

                <textarea
                  {...register("description", { required: true })}
                  placeholder="Enter Details Description"
                  rows="6"
                  cols="50"
                />

                <input className="submitButton" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
