import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from "./pages/rootLayout";
import HomePage from "./pages/homePage";
import OrderPage from "./pages/orderPage";
import ProductPage from "./pages/productPage";
import Cart from "./component/cart/Cart";
import ProductSingle from "./component/product/productSingle";



function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomePage />}></Route>
      <Route path='/order' element={<OrderPage />}></Route>
      <Route path='/product' element={<ProductPage />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path="/product/:id" element={<ProductSingle/>}></Route>

    </Route>
  ));
  return (
      <RouterProvider router={router} />
  );
}

export default App;
