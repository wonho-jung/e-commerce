import React from "react";
import "./App.css";
import Banner from "./components/Banner";
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
    </div>
  );
}

export default App;
