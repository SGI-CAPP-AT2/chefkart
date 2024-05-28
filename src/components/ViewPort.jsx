import { useScreen } from "../context/screen.context";

const ViewPort = ({ children }) => {
  const { height, viewportwidth, width } = useScreen();
  console.log(height);
  return (
    <div
      style={{
        height: height + "px",
        width: viewportwidth + "px",
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
};
export default ViewPort;
