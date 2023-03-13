import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";

const Mainlayout = ({ loadProducts, loadCart }) => {
  //   const { pathname } = useLocation();
  //   if (pathname !== "/home") {
  //     return Navigate({ to: "/home", replace: true });
  //   }
  useEffect(() => {
    loadCart(), loadProducts();
  }, []);
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  loadProducts: () =>
    dispatch({
      type: "LOAD_PRODUCTS_REQUEST",
      payload: {
        url: "products",
        method: "get",
      },
    }),
  loadCart: () =>
    dispatch({
      type: "LOAD_CART_REQUEST",
      payload: {
        url: "cart",
        method: "get",
      },
    }),
});
export default connect(null, mapDispatchToProps)(Mainlayout);
