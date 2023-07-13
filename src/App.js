import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from "./pages/homePage";
import OrderPage from "./pages/orderPage";
import ProductPage from "./pages/productPage";
import Header from "./component/header/header";


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Header />}>
      <Route path='/home' element={<HomePage />}></Route>
      <Route path='/order' element={<OrderPage />}></Route>
      <Route path='/product' element={<ProductPage />}></Route>
    </Route>
  ));
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
