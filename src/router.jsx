import React from "react";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Authlayout from "./layouts/Authlayout";
import Baselayout from "./layouts/Baselayout";
import Mainlayout from "./layouts/Mainlayout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import Register from "./pages/Register/Register";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Baselayout />}>
      <Route path="/" element={<Mainlayout />}>
        <Route path="home" element={<Home />} />
        <Route path="productInfo/:id" element={<ProductInfo />} />
      </Route>
      <Route path="auth" element={<Authlayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Route>
  )
);
