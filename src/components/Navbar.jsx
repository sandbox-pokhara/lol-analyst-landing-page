import React from "react";
import "../css/navbar.css";
import env from "../json/env";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-item">
          <img src={process.env.PUBLIC_URL + "/logo.svg"} className="logo" alt="logo" />
        </div>
      </div>
      <div className="navbar-right">
        <div className="navbar-item small">
          <a href={env.discordLink} target="_blank" rel="noreferrer">
            <img
              src={process.env.PUBLIC_URL + "/discord.svg"}
              className="discord-logo-small"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
