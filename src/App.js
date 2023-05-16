import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import SignInUp from "./components/signInUp/SignInUp";
import ShoppingPage from "./components/shoppingPage/ShoppingPage";
import PaymentPage from "./components/paymentPage/PaymentPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<SignInUp />} />
        <Route
          path="/home"
          exact
          element={
            <>
              <Header />
              <ShoppingPage />
            </>
          }
        />
        <Route
          path="/PaymentPage"
          element={
            <>
              <Header />
              <PaymentPage />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
