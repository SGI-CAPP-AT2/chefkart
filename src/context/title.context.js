import { createContext, useContext } from "react";

const TitleContext = createContext();
export const TitleProvider = ({ setTitle, children }) => {
  return (
    <TitleContext.Provider value={setTitle}>{children}</TitleContext.Provider>
  );
};
export const useTitle = () => useContext(TitleContext);
