import React, { useEffect } from "react";
import "../css/home.css";
import config from "../json/config";
import features from "../json/features";

export default function Home() {
  useEffect(() => {
    document.title =
      "LolAnalystApp | Your League of Legends companion app for Garena (SEA) servers";
  }, []);
  return (
    <div className="home">
      <header className="main-header">
        <div className="title-description">
          <div className="main-header-title">
            <img
              src={process.env.PUBLIC_URL + "/logo-title.svg"}
              className="main-header-logo"
              alt="LolAnalystAppLogo"
            />
            <div className="beta-tag body white">beta</div>
          </div>
          <div className="description gray main-header-subtitle">
            Your League of Legends companion app for Garena (SEA) servers
          </div>
        </div>
        <div
          className="download-button white"
          onClick={() => window.open(config.latestVersionLink, "_blank")}
        >
          Download {config.latestVersion}
        </div>
      </header>

      <div className="contents">
        {features.map((feature, index) => (
          <section className={`feature-item ${feature.className}`} key={index}>
            <img
              className="feature-image"
              alt={feature.title}
              src={process.env.PUBLIC_URL + feature.background}
            />
            <div className="feature-info">
              <h1 className="display white">{feature.title}</h1>
              <div className="feature-subtitle">{feature.description}</div>
            </div>
          </section>
        ))}
        <section className="help-discord">
          <a href={config.discordLink} target="_blank" rel="noreferrer">
            <img src={process.env.PUBLIC_URL + "/discord.svg"} className="discord-logo" alt="" />
          </a>
          <div className="help-discord-text white">
            {"Help us improve the app by your valuable feedback on our "}
            <a href={config.discordLink} target="_blank" rel="noreferrer">
              discord.
            </a>
          </div>
        </section>
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
