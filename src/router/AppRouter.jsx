import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import PrivaterRouter from "./PrivaterRouter";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Purchases from "../pages/Purchases";
import Sales from "../pages/Sales";
import Firms from "../pages/Firms";
import Home from "../pages/Home";
import Brands from "../pages/Brands";
import Products from "../pages/Products";
import Profile from "../pages/Profile";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/stock" element={<PrivaterRouter />}>
          <Route path="" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="/stock/purchases" element={<Purchases />} />
            <Route path="/stock/sales" element={<Sales />} />
            <Route path="/stock/firms" element={<Firms />} />
            <Route path="/stock/brands" element={<Brands />} />
            <Route path="/stock/products" element={<Products />} />
            <Route path="/stock/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
