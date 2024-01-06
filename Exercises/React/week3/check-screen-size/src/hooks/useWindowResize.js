import { useState, useDebugValue } from "react";

export function useWindowResize() {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight, sizeDescription: "" });
  useDebugValue("You have a " + windowSize?.sizeDescription);

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      sizeDescription: window.innerWidth > 1000 ? "big screen" : window.innerWidth < 700 ? "small screen" : "medium screen",
    });
  };
  return [windowSize, setWindowSize, handleResize];
}
