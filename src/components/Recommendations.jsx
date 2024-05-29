import styled from "styled-components";
import { useScreen } from "../context/screen.context";
import arrowdropdown from "../assets/arrowdropdown.svg";
import Button from "./Button";
import RecommendationCard from "./RecommendationCard";
const AccordianTitle = styled.div`
  font-size: 20px;
  width: 100%;
  display: flex;
  vertical-align: middle;
`;
const ArrowDropDown = styled.div`
  width: 30px;
  background-image: url(${arrowdropdown});
  background-repeat: no-repeat;
  background-position: center;
  margin-left: 10px;
  background-size: 25px;
`;
const Body = styled.div`
  width: 100%;
  overflow: scroll;
`;
const Content = styled.div`
  border-top: 5px solid #f2f2f2;
  padding: 30px;
`;
const Margin = styled.div`
  height: 75px;
`;
const Recommendations = ({ aboveHeight, recos }) => {
  const { height } = useScreen();
  return (
    <Body style={{ height: height - aboveHeight - 2 }}>
      <Content>
        <AccordianTitle className="bold">
          Recommendations <ArrowDropDown />
          <Button
            style={{
              marginLeft: "auto",
              marginRight: 0,
            }}
            className="bold"
          >
            Menu
          </Button>
        </AccordianTitle>
        {recos.map((dt) => (
          <RecommendationCard data={dt} />
        ))}
        <Margin />
      </Content>
    </Body>
  );
};
export default Recommendations;
