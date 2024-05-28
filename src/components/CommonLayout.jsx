import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { ScreenProvider } from "../context/screen.context";
import { useState } from "react";
import { TitleProvider } from "../context/title.context";
import ViewPort from "./ViewPort";

const CommonLayout = ({ children }) => {
  const navigate = useNavigate();
  const [height, navHeight] = useState(0);
  const [title, setTitle] = useState(null);
  return (
    <div
      style={{
        width: window.innerWidth + "px",
        height: window.innerHeight + "px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar
        backbuttonfn={() => {
          navigate("/");
        }}
        setHeight={navHeight}
        title={title}
      />
      <ScreenProvider navHeight={height}>
        <TitleProvider setTitle={setTitle}>
          <ViewPort>{children}</ViewPort>
        </TitleProvider>
      </ScreenProvider>
    </div>
  );
};
export default CommonLayout;
