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
      <div className={style.payment_details}>
        <div className={style.image}>
          <img src={poster} alt="" />
        </div>
        <div>
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
