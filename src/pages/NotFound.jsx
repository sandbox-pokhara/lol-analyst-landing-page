import React from "react";
import NonIdealState from "../components/NonIdealState";

export default function NotFound() {
  return (
    <div className="not-found">
      <NonIdealState text={"404 Not Found"} />
    </div>
  );
}
