import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ProductDetail from "./Pages/ProductDetail";
import ProductsByCategory from "./Pages/ProductsByCategory";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Count from "./components/Count/Count";
import { Provider } from "react-redux";
import store from "./state/Store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/category/:name",
    element: <ProductsByCategory />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/count",
    element: <Count />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
