import React from "react";
import "../css/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-item link">LolAnalytics</div>
      </div>
      <div className="navbar-right">
        <div className="navbar-item small link">
          <img src={process.env.PUBLIC_URL + "/discord.png"} className="discord-logo" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
