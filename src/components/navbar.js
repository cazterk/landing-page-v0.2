import React from "react";
import DarkModeToggle from "./darkModeToggle";
import "../assets/scss/navbar.scss";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar__logo">
          <a href="#">cazterk</a>
        </div>
        <div className="navbar__menu">
          <DarkModeToggle />
          <a href="#" className="">
            Projects
          </a>
        </div>
      </div>
    </div>
  );
}
