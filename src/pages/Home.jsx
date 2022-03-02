import React from "react";
import "../css/home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="header">
        <div className="header-item">
          <div className="header-title">
            <span className="primary">Beta</span> version releasing soon
          </div>
          <div className="header-subtitle">op.gg alternative for south east asian servers.</div>
        </div>
      </div>

      <div className="features">
        <div className="feature-item">
          <div className="feature-header">
            <div className="feature-title">Profile Page Demo</div>
            <div className="feature-subtitle">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ipsa, repudiandae consequatur adipisci
            </div>
          </div>
          <div className="feature-image">
            <img src={process.env.PUBLIC_URL + "/features/profile.png"} alt="" className="image" />
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-image">
            <img src={process.env.PUBLIC_URL + "/features/champ.png"} alt="" className="image" />
          </div>
          <div className="feature-header">
            <div className="feature-title">Champ Select Page Demo</div>
            <div className="feature-subtitle">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ipsa, repudiandae consequatur adipisci
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="header-item">
          <div className="header-title">More features coming soon</div>
          <div className="header-subtitle">We are for the customers.</div>
        </div>
      </div>
    </div>
  );
}
