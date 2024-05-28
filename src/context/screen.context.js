import { createContext, useContext, useEffect, useState } from "react";

const ScreenContext = createContext();
export const ScreenProvider = ({ navHeight, children }) => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const viewportwidth = window.innerWidth < 750 ? window.innerWidth : 750;
  useEffect(() => {
    setHeight(Math.abs(window.innerHeight - navHeight));
    const listener = () => {
      setHeight(Math.abs(window.innerHeight - navHeight));
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [navHeight]);

  return (
    <ScreenContext.Provider value={{ height, width, viewportwidth }}>
      {children}
    </ScreenContext.Provider>
  );
};
export const useScreen = () => useContext(ScreenContext);
