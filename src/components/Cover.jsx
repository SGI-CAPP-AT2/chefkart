import styled from "styled-components";
import { useScreen } from "../context/screen.context";
import b1_b from "../assets/b1_b.png";
import b2_b from "../assets/bg2_b.png";
import time from "../assets/time.svg";
const top0left0 = `
  top: 0;
  left: 0;
`;
const Container = styled.div`
  width: 100%;
  min-height: 500px;
  position: relative;
  border-bottom: 5px solid #f2f2f2;
`;
const Front = styled.div`
  position: absolute;
  ${top0left0}
  z-index: 1;
`;
const Back = styled.div`
  position: absolute;
  ${top0left0}
  z-index: 0;
  width: 100%;
  height: 100%;
`;
const BackgroundContainer = styled.div`
  position: relative;
  ${top0left0}
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const Title = styled.div`
  font-size: 60px;
  margin: 10px;
  margin-top: 30px;
`;
const Subtitle = styled.div`
  color: #a3a3a3;
  font-size: 20px;
  margin: 15px;
  padding-right: 150px;
  max-height: 100px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Time = styled.div`
  background-image: url(${time});
  background-repeat: no-repeat;
  background-position-x: 0;
  background-position-y: center;
  padding-left: 30px;
  margin: 20px;
`;
const Circle = styled.div`
  position: absolute;
  bottom: 0;
  right: -50px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: #fff9f2 0% 0% no-repeat padding-box;
  opacity: 1;
`;
const style_for_bg_images = {
  position: "absolute",
};
const Cover = ({ title, subtitle, time }) => {
  const { viewportwidth } = useScreen();
  return (
    <div style={{ width: viewportwidth }}>
      <Container>
        <Front>
          <Title className="bold">{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Time>{time}</Time>
        </Front>
        <Back>
          <BackgroundContainer>
            <Circle />
            <img
              src={b1_b}
              style={{
                ...style_for_bg_images,
                bottom: 0,
                right: -300 + "px",
              }}
              alt="for background"
            />
            <img
              src={b2_b}
              style={{
                ...style_for_bg_images,
                bottom: -60,
                right: -150,
              }}
              alt="for background"
            />
          </BackgroundContainer>
        </Back>
      </Container>
    </div>
  );
};
export default Cover;
