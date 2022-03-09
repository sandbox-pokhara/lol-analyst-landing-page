import React from "react";
import { Link } from "react-router-dom";
import footerLinks from "../json/footer-links.json";
import RiotLegalBoilerplate from "./RiotLegalBoilerplate";

export default function Footer() {
  const scroll = () => document.getElementById("root-container-wrapper").scrollTo(0, 0);

  return (
    <div className="footer">
      <div className="footer-items">
        <div className="body-small gray">© 2022 Sandbox Software Pvt. Ltd.</div>
        {footerLinks.map((l, i) => (
          <Link key={i} className="body-small gray" to={l.to} onClick={scroll}>
            {l.text}
          </Link>
        ))}
      </div>
      <RiotLegalBoilerplate />
    </div>
  );
}
