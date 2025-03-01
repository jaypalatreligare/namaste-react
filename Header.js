import React from "react";
export const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        {" "}
        <img alt="productimage"className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNl1WcEr1Wv0VlscNKDZKcM-x0WkVFKNn2Zg&s" />{" "}
      </div>
      <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
        </div>
    </div>
  );
};
export default Header;
