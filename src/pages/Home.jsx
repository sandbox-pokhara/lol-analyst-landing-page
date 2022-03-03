import React from "react";
import "../css/home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="main-header">
        <div className="main-header-title">
          <span className="primary">Beta version </span> releasing soon.
        </div>
        <div className="main-header-subtitle">
          op.gg alternative for <span className="defeat">south east asian</span> servers.
        </div>
      </div>

      <div className="features">
        <div className="main-subheading feature-item">Features</div>
        <div className="feature-item">
          <div className="feature-header">
            <div className="feature-title">Profile Page Demo</div>
            <div className="feature-subtitle">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ipsa, repudiandae
              consequatur adipisci
            </div>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/features/profile.png"}
            alt=""
            className="feature-image"
          />
        </div>
        <div className="feature-item">
          <img
            src={process.env.PUBLIC_URL + "/features/champ.png"}
            alt=""
            className="feature-image"
          />
          <div className="feature-header">
            <div className="feature-title">Champ Select Page Demo</div>
            <div className="feature-subtitle">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ipsa, repudiandae
              consequatur adipisci
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
    </div>
  );
}
