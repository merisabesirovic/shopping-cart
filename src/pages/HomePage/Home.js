import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1 className="home-title">
          Fresh Food<br></br> & Grocery shopping
        </h1>
        <p className="smaller-text">
          <a className="products" href="/shop">
            Check our products
          </a>
        </p>
      </div>
    </div>
  );
}
