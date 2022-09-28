import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Category from "./Pages/Category";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <div>
        <Product />
      </div>
    )
  },
  {
    path: "/category/:name",
    element: (
      <div>
        <Category />
      </div>
    )
  },
  {
    path: "/login",
    element: (
      <Login />
    )
  },
  {
    path: "/cart",
    element: (
      <Cart />
    )
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={router} />
  </div>
);
