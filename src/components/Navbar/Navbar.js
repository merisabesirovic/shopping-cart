import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/shopping-cart-3045.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppContext } from "../../AppContext/AppCotext";
import { useContext } from "react";
export default function Navbar() {
  const { cart } = useContext(AppContext);
  const filteredCart = cart.filter((e, i) => cart.indexOf(e.id) !== i);
  console.log("filtrirani" + filteredCart.length);
  return (
    <header className="navbar">
      <NavLink to={"/"}>
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <div className="links">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "activeStyles" : "classicStyles"
          }
        >
          <h2>HOME</h2>
        </NavLink>
        <NavLink
          to={"/sale"}
          className={({ isActive }) =>
            isActive ? "activeStyles" : "classicStyles"
          }
        >
          <h2>ON SALE</h2>
        </NavLink>
        <NavLink
          to={"/shop"}
          className={({ isActive }) =>
            isActive ? "activeStyles" : "classicStyles"
          }
        >
          <h2>PRODUCTS</h2>
        </NavLink>
        <NavLink
          to={"/cart"}
          className={({ isActive }) =>
            isActive ? "activeStyles" : "classicStyles"
          }
        >
          <div className="cartIconContainer">
            <ShoppingCartIcon className="cartIcon" />
            {filteredCart.length > 0 && (
              <div className="cartCounter">{filteredCart.length}</div>
            )}
          </div>
        </NavLink>
      </div>
    </header>
  );
}
