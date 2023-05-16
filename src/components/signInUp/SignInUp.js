import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import style from "./SignInUp.module.css";

const SignInUp = () => {
  const [enterEmail, setEnterdEmail] = useState("");
  const [enterPassword, setenterPassword] = useState("");

  const navigate = useNavigate();

  const emailHandler = (event) => {
    setEnterdEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setenterPassword(event.target.value);
  };

  const signUpHanlder = () => {
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAeptA9Se9JoJa1njcERufSW5xY2mnus7c",
        {
          email: enterEmail,
          password: enterPassword,
          returnSecureToken: true,
        }
      )
      .then((response) => {
        const uId = response.data.localId;
        localStorage.setItem("user", uId);
        alert("Sign Up Successful");
      })
      .catch((error) => {
        console.log(error.response.data.error.message);
        alert(error.response.data.error.message);
      });
  };
  const signInHandler = () => {
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAeptA9Se9JoJa1njcERufSW5xY2mnus7c",
        {
          email: enterEmail,
          password: enterPassword,
          returnSecureToken: true,
        }
      )
      .then((response) => {
        console.log(response);
        const uId = response.data.localId;
        localStorage.setItem("user", uId);
        alert("Sign In Successful");
        navigate("/home", { replace: true });
      })
      .catch((error) => {
        console.log(error.response.data.error.message);
        alert(error.response.data.error.message);
      });
  };

  return (
    <section>
      <div className={style.sign}>
        <img
          src="https://www.sporcle.com/blog/wp-content/uploads/2018/03/1-22.jpg"
          alt=""
        />

        <div className={style.signInUp}>
          <div>
            <p>SHOPIFY</p>
          </div>
          <div>
            <div className={style.lableInput}>
              <label htmlFor="email">Email</label>
              <br />
              <input type="email" id="email" onChange={emailHandler} />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <br />
              <input type="password" id="password" onChange={passwordHandler} />
            </div>
          </div>
          <div className={style.action_sign}>
            <div>
              <button onClick={signUpHanlder}>Sign Up</button>
            </div>
            <div>
              <button onClick={signInHandler}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInUp;
