import React from "react";
import "../css/navbar.css";
import { ReactComponent as Logo } from "../images/logo.svg";
import config from "../json/config";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-item">
        <a href="/">
          <Logo className="logo" fill="white" />
        </a>
      </div>
      <div className="navbar-item">
        <a href={config.discordLink} target="_blank" rel="noreferrer">
          <img
            src={process.env.PUBLIC_URL + "/discord.svg"}
            className="discord-logo-small"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
