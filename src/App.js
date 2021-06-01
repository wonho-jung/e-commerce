import React from "react";
import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Fruit from "./components/Fruit";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Popular from "./components/Popular";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "./components/firebase";
import { login, logout } from "./features/userSlice";
import Products from "./components/Products/Products";
import ProductsHero from "./components/Products/ProductsHero";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const userState = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            user: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return userState;
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/products">
          <Header />
          <ProductsHero />
          <Products />
          <Contact />
        </Route>
        <Route path="/" exact>
          <Header />

          <Hero />
          <Banner />
          <Popular />
          <Fruit />
          <About />
          <Contact />
        </Route>
      </Router>
    </div>
  );
}

export default App;
