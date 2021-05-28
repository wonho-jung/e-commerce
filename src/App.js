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

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Hero />
        <Banner />
        <Popular />
        <Fruit />
        <About />
        <Contact />
      </Router>
    </div>
  );
}

export default App;
