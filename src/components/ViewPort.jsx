import { useScreen } from "../context/screen.context";

const ViewPort = ({ children }) => {
  const { height, width } = useScreen();
  return (
    <div
      style={{
        height: height + "px",
        width: (width < 750 ? width : 750) + "px",
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
};
export default ViewPort;
