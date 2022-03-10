import React from "react";
import "../css/home.css";
import config from "../json/config";
import features from "../json/features";

export default function Home() {
  return (
    <div className="home">
      <div className="main-header">
        <div className="title-description">
          <div className="main-header-title">
            <img
              src={process.env.PUBLIC_URL + "/logo-title.svg"}
              className="main-header-logo"
              alt="logo"
            />
            <div className="beta-tag body white">beta</div>
          </div>
          <div className="description gray main-header-subtitle">
            op.gg alternative designed for south east asian servers
          </div>
        </div>
        <div
          className="download-button white"
          onClick={() => window.open(config.latestVersionLink, "_blank")}
        >
          Download {config.latestVersion}
        </div>
      </div>

      <div className="contents">
        {features.map((feature, index) => (
          <div className={`feature-item ${feature.className}`} key={index}>
            <img
              className="feature-image"
              alt="feature"
              src={process.env.PUBLIC_URL + feature.background}
            />
            <div className="feature-info">
              <div className="feature-title white">{feature.title}</div>
              <div className="feature-subtitle">{feature.description}</div>
            </div>
          </div>
        ))}
        <div className="help-discord">
          <a href={config.discordLink} target="_blank" rel="noreferrer">
            <img src={process.env.PUBLIC_URL + "/discord.svg"} className="discord-logo" alt="" />
          </a>
          <div className="help-discord-text white">
            {"Help us improve the app by your valuable feedback on our "}
            <a href={config.discordLink} target="_blank" rel="noreferrer">
              discord.
            </a>
          </div>
        </div>
        <div
          className="download-button white"
          onClick={() => window.open(config.latestVersionLink, "_blank")}
        >
          Download {config.latestVersion}
        </div>
      </div>
    </div>
  );
}
