import React, { useContext } from "react";
import RiotLegalBoilerplate from "../components/RiotLegalBoilerplate";
import { ThemeContext } from "../contexts";
import "../css/home.css";
import themes from "../json/themes";

const getFeatureBackground = (image, theme, index) => {
  const background = themes[theme]["background"];
  const backgroundImage = `linear-gradient(to ${
    index % 2 === 0 ? "left" : "right"
  }, #FFF0, ${background}), linear-gradient(to bottom, #FFF0, ${background}), url(${image})`;
  return { backgroundImage };
};

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="home">
      <div className="main-header">
        <div className="main-header-title">
          <span className="primary">Beta version </span> releasing soon.
        </div>
        <div className="main-header-subtitle">op.gg alternative for south east asian servers.</div>
      </div>

      <div className="features">
        <div className="main-subheading">Features</div>
        <div className="feature-items">
          <div className="feature-item">
            <div className="feature-header">
              <div className="feature-title">Profile Page Demo</div>
              <div className="feature-subtitle">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ipsa,
                repudiandae consequatur adipisci
              </div>
            </div>
            <div
              className="feature-image"
              style={getFeatureBackground(
                process.env.PUBLIC_URL + "/features/profile.png",
                theme,
                0
              )}
            ></div>
          </div>
          <div className="feature-item">
            <div
              className="feature-image"
              style={getFeatureBackground(process.env.PUBLIC_URL + "/features/champ.png", theme, 1)}
            ></div>
            <div className="feature-header">
              <div className="feature-title">Champ Select Page Demo</div>
              <div className="feature-subtitle">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ipsa,
                repudiandae consequatur adipisci
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-header">
        <div className="heading">More features coming soon.</div>
        <div className="heading">We are for the customers.</div>
      </div>
      <div className="main-header">
        <div className="heading">Join our discord for more information.</div>
      </div>
      <RiotLegalBoilerplate />
    </div>
  );
}
