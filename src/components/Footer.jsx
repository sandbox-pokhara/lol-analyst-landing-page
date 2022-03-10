import React from "react";
import { Link } from "react-router-dom";
import footerLinks from "../json/footer-links.json";
import RiotLegalBoilerplate from "./RiotLegalBoilerplate";

export default function Footer() {
  const scroll = () => window.scrollTo(0, 0);

  return (
    <div className="footer">
      <div className="footer-items">
        <div className="footer-item gray">© 2022 Sandbox Software Pvt. Ltd.</div>
        {footerLinks.map((l, i) => (
          <Link key={i} className="footer-item gray" to={l.to} onClick={scroll}>
            {l.text}
          </Link>
        ))}
      </div>
      <RiotLegalBoilerplate />
    </div>
  );
}
