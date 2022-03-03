import React from "react";
import "../css/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-item">
          <img src={process.env.PUBLIC_URL + "/logo.png"} className="logo" alt="logo" />
          <div>LolAnalyst</div>
        </div>
      </div>
      <div className="navbar-right">
        <div className="navbar-item small">
          <img src={process.env.PUBLIC_URL + "/discord.png"} className="discord-logo" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
