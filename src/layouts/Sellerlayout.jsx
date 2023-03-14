import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";

const Sellerlayout = ({ loadMyProducts }) => {
  useEffect(() => {
    loadMyProducts();
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loadMyProducts: () =>
    dispatch({
      type: "LOAD_MY_PRODUCTS_REQUEST",
      payload: {
        url: "products?userId=123456789",
        method: "get",
      },
    }),
});

export default connect(null, mapDispatchToProps)(Sellerlayout);
