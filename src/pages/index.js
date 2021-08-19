import React from "react";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Content from "../components/content";
import DarkModeToggle from "../components/darkModeToggle";
import "../assets/scss/home.scss";
require("typeface-nunito");

export default function Home() {
  return (
    <div className="main">
      <div>
        <Navbar />
        <Hero />
        <Content />
        <Footer />
      </div>
    </div>
  );
}
