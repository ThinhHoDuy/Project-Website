import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from "./pages/rootLayout";
import HomePage from "./pages/homePage";
import OrderPage from "./pages/orderPage";
import ProductPage from "./pages/productPage";
import Cart from "./component/cart/Cart";
import ProductSingle from "./component/product/productSingle";
import Login from "./admin/login";
import Admin from "./admin/admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { Addcrud } from "./admin/addcrud";  
import { Editcrud } from "./admin/editcrud";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomePage />}></Route>
      <Route path='/order' element={<OrderPage />}></Route>
      <Route path='/product' element={<ProductPage />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path="/product/:id" element={<ProductSingle />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/addcrud" element={<Addcrud />}></Route>
      <Route path="/Editcrud/:id" element={<Editcrud />}></Route>
    </Route>
  ));
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer/>
    </>
  );
}

export default App;
