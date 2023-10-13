import React from "react";
import { NavLink } from "react-router-dom";

import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1 className="home-title">
          Big outlet<br></br> & Grocery shopping
        </h1>
        <div className="smaller-text">
          <NavLink to={"/shop"}>
            <p className="products">Check our products</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
