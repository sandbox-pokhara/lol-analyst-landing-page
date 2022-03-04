import React from "react";
import RiotLegalBoilerplate from "../components/RiotLegalBoilerplate";
import "../css/home.css";
import env from "../json/env";
import features from "../json/features";

export default function Home() {
  return (
    <div className="home">
      <div className="main-header">
        <div className="main-header-title">
          <img
            src={process.env.PUBLIC_URL + "/logo-title.svg"}
            className="main-header-logo"
            alt="logo"
          />
          <div className="beta-tag">beta</div>
        </div>
        <div className="main-header-subtitle">op.gg alternative for south east asian servers.</div>
      </div>

      <div className="contents">
        {features.map((feature, index) => (
          <div className={`feature-item ${feature.className}`} key={index}>
            <img alt="feature" src={process.env.PUBLIC_URL + feature.background} />
            <div className="feature-info">
              <div className="feature-title">{feature.title}</div>
              <div className="feature-subtitle">{feature.description}</div>
            </div>
          </div>
        ))}
        <div className="help-discord">
          <a href={env.discordLink} target="_blank" rel="noreferrer">
            <img src={process.env.PUBLIC_URL + "/discord.svg"} className="discord-logo" alt="" />
          </a>
          <div className="help-discord-text">
            {"Help us improve the app by your valuable feedback on our "}
            <a href={env.discordLink} target="_blank" rel="noreferrer">
              discord.
            </a>
          </div>
        </div>
        <div
          className="download-button"
          onClick={() => window.open(env.latestVersionLink, "_blank")}
        >
          Download {env.latestVersion}
        </div>
        <RiotLegalBoilerplate />
      </div>
    </div>
  );
}
