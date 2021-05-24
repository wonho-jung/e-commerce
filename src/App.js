import React from "react";
import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Fruit from "./components/Fruit";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Popular from "./components/Popular";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Banner />
      <Popular />
      <Fruit />
      <About />
      <Contact />
    </div>
  );
}

export default App;
