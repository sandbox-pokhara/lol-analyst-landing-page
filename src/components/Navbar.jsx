import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import config from "../json/config";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-item">
        <Link to={"/"}>
          <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="logo" />
        </Link>
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
