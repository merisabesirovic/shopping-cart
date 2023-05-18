import React from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png";
export default function Navbar() {
  return (
    <header className="navbar">
      <img className="logo" src={logo} alt="slika"></img>
      <div className="links">
        <h2>PRODUCTS</h2>
        <h2>CART</h2>
      </div>
    </header>
  );
}
