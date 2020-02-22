import React from "react";

const Nav = ({ activeTab, onTabChange }) => {
  const itemClass = tabName => `App-nav-item ${activeTab === tabName ? "selected" : ""}`;

  return (
    <nav className="App-nav">
      <ul>
        <li className={itemClass("items")}>
          <button onClick={() => onTabChange("items")}>Items</button>
        </li>
        <li className={itemClass("carts")}>
          <button onClick={() => onTabChange("items")}>Carts</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
