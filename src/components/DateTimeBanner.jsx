import styled from "styled-components";
import calendar from "../assets/calendar.svg";
import time from "../assets/time.svg";
const SuperParent = styled.div`
  position: relative;
  width: 100%;
  height: 130px;
`;
const Front = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  vertical-align: middle;
  align-items: middle;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
const Back = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;
const BlackBlock = styled.div`
  height: 40%;
  width: 100%;
  background-color: #1c1c1c;
`;
const Ellipses = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const DateTimeContainer = styled.div`
  display: flex;
  width: calc(100% - 120px);
  margin: auto;
  margin-bottom: 10px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 4px #d6d6d69e;
  border-radius: 9px;
  vertical-align: center;
  padding: 30px;
`;
const ImageIcon = styled.img`
  margin: auto;
`;
const DateContainer = styled.div`
  margin-left: auto;
  display: flex;
  ${Ellipses}
`;
const TimeContainer = styled.div`
  margin-right: auto;
  display: flex;
  ${Ellipses}
`;
const TextInContainer = styled.div`
  margin: auto;
  margin-left: 10px;
  ${Ellipses}
`;
const VerticalDivider = styled.div`
  height: 30px;
  width: 2px;
  background-color: #d6d6d6ce;
  margin-right: 15px;
  margin-left: 15px;
`;
const DateTimeBanner = () => {
  return (
    <SuperParent>
      <Back>
        <BlackBlock />
      </Back>
      <Front>
        <DateTimeContainer>
          <DateContainer>
            <ImageIcon src={calendar} />
            <TextInContainer className="bold">21 APR 2021</TextInContainer>
          </DateContainer>
          <VerticalDivider />
          <TimeContainer>
            <ImageIcon src={time} />
            <TextInContainer className="bold">
              10:30 Pm-12:30 Pm
            </TextInContainer>
          </TimeContainer>
        </DateTimeContainer>
      </Front>
    </SuperParent>
  );
};
export default DateTimeBanner;
