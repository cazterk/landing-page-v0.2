import React from "react";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Content from "../components/content";
import "../assets/scss/home.scss";
require("typeface-nunito");

export default function Home() {
  return (
    <div>
      Hello, world
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}
