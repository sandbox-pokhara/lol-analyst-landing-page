import React from "react";

export default function NonIdealState({ text }) {
  return (
    <div className="non-ideal-state">
      <span className="emote">\(o_o)/</span>
      <span className="text white">{text}</span>
    </div>
  );
}
