import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header Render");
  useEffect(() => {
    console.log("useEffect Called");
  }, [btnNameReact]);
  return (
    <div className="header">
      <div className="logo-container">
        {" "}
        <img
          alt="productimage"
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNl1WcEr1Wv0VlscNKDZKcM-x0WkVFKNn2Zg&s"
        />{" "}
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Cart</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
