import React from "react";
import LeftSidebar from "./LeftSidebar.jsx";
import Graph from "./Graph.jsx";

function MainArea() {
  return (
    <div className="mainArea">
      <LeftSidebar />
      <Graph />
    </div>
  );
}

export default MainArea;
