import React from "react";
import "../assets/scss/navbar.scss";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar__logo">
          <a href="#">Cazterk</a>
        </div>
        <div className="navbar__menu">
          <a href="#" className="">
            Projects
          </a>
          <a href="#" className=""></a>
        </div>
      </div>
    </div>
  );
}
