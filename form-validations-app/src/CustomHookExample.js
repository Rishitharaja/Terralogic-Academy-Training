import React from "react";
import useWindowWidth from "./useWindowWidth";

function ResponsiveComponent() {
  const width = useWindowWidth();

  return (
    <div>
      <h1>Window width: {width}px</h1>
      {width < 600 ? (
        <p>📱 You are on a small screen!</p>
      ) : (
        <p>💻 You are on a large screen!</p>
      )}
    </div>
  );
}

export default ResponsiveComponent;
