import React, { useContext } from "react";
import RiotLegalBoilerplate from "../components/RiotLegalBoilerplate";
import { ThemeContext } from "../contexts";
import "../css/home.css";
import env from "../json/env";
import themes from "../json/themes";

const features = [
  {
    title: "Profile Analysis",
    description: `Analyse your win rate, wins, losses and match history with our desktop app.
      We're planning to bring online profile sharing, LP graph and more comprehensive profile page to you.
      Join our discord for suggestions!`,
    background: "/features/profile.png",
  },
  {
    title: "Champ Select Analysis",
    description: `Stragetize your picks based on your teammates' champion pool,
      check your teammates' current and last season's rank and recent match history.
      We're planning to add win/loss streak detection, one trick pony detection and many more in the future.`,
    background: "/features/champ.png",
  },
];

const getFeatureItemStyle = (index) => {
  return { flexDirection: index % 2 === 0 ? "row" : "row-reverse" };
};

const getFeatureImageStyle = (image, theme, index) => {
  const background = themes[theme]["background"];
  var gradientDirection = "right";
  if (index % 2 === 0) {
    gradientDirection = "left";
  }
  const backgroundImage = `linear-gradient(to ${gradientDirection}, ${background} 0%, rgba(0, 0, 0, 0) 100%), url(${image})`;
  return { backgroundImage };
};

export default function Home() {
  const { theme } = useContext(ThemeContext);

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
          <div className="feature-item" style={getFeatureItemStyle(index)} key={index}>
            <div
              className="feature-image"
              style={getFeatureImageStyle(
                process.env.PUBLIC_URL + feature.background,
                theme,
                index
              )}
            ></div>
            <div className="feature-info">
              <div className="feature-title">{feature.title}</div>
              <div className="feature-subtitle">{feature.description}</div>
            </div>
          </div>
        ))}
        <div className="help-discord">
          <img src={process.env.PUBLIC_URL + "/discord.svg"} className="discord-logo" alt="" />
          <div className="help-discord-text">
            Help us improve the app by your valuable feedbacks on our{" "}
            <a href={env.discordLink} target="_blank" rel="noreferrer">
              discord
            </a>
            .
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
