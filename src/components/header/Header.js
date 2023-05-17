import React from "react";
import style from "./Header.module.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  };

  return (
    <header className={style.heading}>
      <h1>Welcome To Shopify</h1>
      <div className={style.logoutAction}>
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
