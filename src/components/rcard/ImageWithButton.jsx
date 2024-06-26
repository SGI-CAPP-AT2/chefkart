import styled from "styled-components";
import AddButton from "./AddButton";
import { useScreen } from "../../context/screen.context";

const Parent = styled.div`
  position: relative;
  height: 100px;
`;
const BaseForBoth = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
const Front = styled(BaseForBoth)`
  z-index: 1;
  width: 150px;
  height: 100px;
  display: flex;
`;
const Back = styled(BaseForBoth)`
  z-index: 0;
  padding: 15px;
  width: 100%;
`;
const Image = styled.div`
  height: 100px;
  width: 120px;
  border-radius: 10px;
  overflow: hidden;
`;
const ImageWithButton = ({ image }) => {
  const { viewportwidth } = useScreen();
  return (
    <Parent style={{ width: viewportwidth > 750 ? 150 : 120 }}>
      <Front>
        <AddButton />
      </Front>
      <Back>
        <Image>
          <img style={{ width: "120px" }} src={image} alt="illustration" />
        </Image>
      </Back>
    </Parent>
  );
};
export default ImageWithButton;
