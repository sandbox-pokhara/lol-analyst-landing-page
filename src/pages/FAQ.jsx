import React from "react";
import config from "../json/config.json";

export default function FAQ() {
  return (
    <div className="faq">
      <h1 className="heading-large">FAQ</h1>
      <h2 className="heading">What is LolAnalaystApp?</h2>
      <p className="paragraph">
        LolAnalystApp is a League of Legends companion app designed to work on every server that
        provides useful insights about the game.
      </p>
      <h2 className="heading">Does LolAnalystApp work on garena servers?</h2>
      <p className="paragraph">
        Yes, LolAnalystApp works on all south east asian servers (Garena) as well as NA, EUW, EUNE,
        OCE, LAN, LAS, BR, JP, RU and TR.
      </p>
      <h2 className="heading">How does LolAnalystApp monetize?</h2>
      <p className="paragraph">We plan to run ads on the website and the desktop app.</p>
      <h2 className="heading">Will LolAnalystApp have overlay feature?</h2>
      <p className="paragraph">We are working on overlays.</p>
      <h2 className="heading">Will LolAnalystApp have a web-based app?</h2>
      <p className="paragraph">
        We are planning to add a web-based app where you can share your profile, specific games,
        etc in the future.
      </p>

      <h2 className="heading">Can you implement a feature that I want?</h2>
      <p className="paragraph">
        If you want to request a feature, please join our{" "}
        <a href={config.discordLink} target="_blank" rel="noreferrer">
          discord server
        </a>{" "}
        and post it in #feature-request channel.
      </p>
    </div>
  );
}
