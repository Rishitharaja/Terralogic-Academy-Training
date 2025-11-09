import { useState, useEffect } from "react";

function CustomHook() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    // Cleanup listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default CustomHook;

