import React from "react";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Content from "../components/content";

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
