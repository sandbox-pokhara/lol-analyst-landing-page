import React from "react";
import "../css/navbar.css";
import { ReactComponent as Logo } from "../images/logo.svg";
import env from "../json/env";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-item">
        <Logo className="logo" fill="white" />
      </div>
      <div className="navbar-item">
        <a href={env.discordLink} target="_blank" rel="noreferrer">
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
