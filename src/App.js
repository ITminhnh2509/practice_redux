import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./component/Products";
import Cart from "./component/Cart";
export default function App() {
  return (
    <div>
      <Products />
      <Cart />
    </div>
  );
}
