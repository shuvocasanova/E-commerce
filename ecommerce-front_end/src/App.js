import React from "react";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";

import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import Success from "./pages/Success";

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products/:category" exact element={<ProductList />} />
        <Route path="/product/:id" exact element={<Product />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/success" exact element={<Success />} />
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate replace to="/" /> : <Register />}
        />
      </Routes>
    </Router>
    //     <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
    //     <Route path="/register">
    //       {user ? <Redirect to="/" /> : <Register />}
    //     </Route>
    //   </Switch>
    // </Router>
  );
};

export default App;
