import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Brands from "../pages/Brands";
import Home from "../pages/Home";
import Purchases from "../pages/Purchases";
import Sales from "../pages/Sales";
import Products from "../pages/Products";
import Firms from "../pages/Firms";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />}>
            <Route index  element={<Home />} />
            <Route path="/stock/purchases" element={<Purchases />} />
            <Route path="/stock/firms" element={<Firms />} />
            <Route path="/stock/sales" element={<Sales />} />
            <Route path="/stock/brands" element={<Brands />} />
            <Route path="/stock/products" element={<Products />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
