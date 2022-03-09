import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="about-us-page">
      <div className="our-mission">
        <div className="body">OUR MISSION</div>
        <div className="our-mission-text">
          Our mission is to help league of legends gamers, especially focusing{" "}
          <span className="white">South East Asia</span>, with a personal companion that provides
          important insights both inside and outside of the game.
        </div>
      </div>
      <img
        className="about-us-image"
        src={process.env.PUBLIC_URL + "/about-us.png"}
        alt="about-us"
      />
      <div className="about-us">
        <div className="about-us-heading">About Us</div>
        <div className="about-us-text">
          It is 2022 and there are still no services that provide a tool to get proper insights for
          SEA league of legends gamers. For years, we have been waiting for an analysis tool to
          boost our performace. So, we, as a group of aspiring gamers/developers, decided create a
          beautifully designed robust app that aims to improve gameplay inside league of legends.
          We, as a team, are always looking to add new creative features to improve to app and hear
          from you.
        </div>
        <div className="about-us-text">
          {"If you have any queries, leave a message using our "}
          <Link to="/contact-us">contact form.</Link>
        </div>
      </div>
    </div>
  );
}
