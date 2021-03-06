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
import Cart from "./components/Cart/Cart";
import CartHero from "./components/Cart/CartHero";
import ProfileHero from "./components/Profile/ProfileHero";
import Profile from "./components/Profile/Profile";
import Payment from "./components/Payment/Payment";
import PaymentHero from "./components/Payment/PaymentHero";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51J0Y5OC0qDibsqWE30Bkt9Q1R97hmGDOJsJ51iSPTTodk2SbW5jUJaOb4JosQ70ZinGFGrOMx9CxclIoToGDO26f00w9JN1wAQ"
);
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const userState = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            user: authUser.email,
            displayname: authUser.displayName
              ? authUser.displayName
              : authUser.email.substring(0, authUser.email.indexOf("@")),
            photoURL: authUser.photoURL,
            uid: authUser.uid,
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
        <Route path="/payment">
          <Header />
          <PaymentHero />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/profile">
          <Header />
          <ProfileHero />
          <Profile />
          <Contact />
        </Route>

        <Route path="/cart">
          <Header />
          <CartHero />
          <Cart />
          <Contact />
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
