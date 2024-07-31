import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  return <div></div>;
}
