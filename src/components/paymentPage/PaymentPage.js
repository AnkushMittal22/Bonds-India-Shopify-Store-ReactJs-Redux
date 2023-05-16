import React, { useState } from "react";
import style from "./PaymentPage.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { actionOne } from "../../store/ShopingStore";
import { useDispatch } from "react-redux";

const PaymentPage = () => {
  const dispatch = useDispatch();
  const title = useSelector((store) => store.productTitle);
  const quantity = useSelector((store) => store.ProductQuantity);
  const price = useSelector((store) => store.productPirce);
  const poster = useSelector((store) => store.productPoster);
  const navigate = useNavigate();

  const confirmHandler = () => {
    alert("Order Confirmed");
  };

  const backHandler = () => {
    dispatch(actionOne.EmptyData());
    navigate("/home");
  };

  return (
    <div className={style.payment}>
      <img
        style={{ height: "89vh", width: "100%" }}
        src="https://img.freepik.com/premium-photo/travel-concept-blue-background-with-copy-space-airplane-toy-blue-color-background_661495-33583.jpg"
        alt=""
      />
      <div className={style.payment_details}>
        <img src={poster} alt="" />
        <div className={style.details}>
          <p>
            <span>Product Title :</span>
            <span>{title}</span>
          </p>
          <p>
            <span>Product Quantity :</span>
            <span>{quantity}</span>
          </p>
          <p>
            <span>Product Price :</span>
            <span>{price}</span>
          </p>
        </div>

        <div className={style.bottom_button}>
          <button onClick={confirmHandler}>Confirm Order</button>
          <button onClick={backHandler}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
