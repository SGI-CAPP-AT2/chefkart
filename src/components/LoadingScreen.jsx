import styled from "styled-components";
import { useScreen } from "../context/screen.context";

const Parent = styled.div`
  width: 100%;
  display: flex;
`;
const Wrapper = styled.div`
  margin: auto;
`;
const Spinner = styled.span`
  width: 48px;
  height: 48px;
  background: #00000084;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  animation: animloader 1s ease-in infinite;
`;
const LoadingScreen = () => {
  const { height } = useScreen();
  return (
    <Parent style={{ height }}>
      <Wrapper>
        <Spinner />
      </Wrapper>
    </Parent>
  );
};
export default LoadingScreen;
