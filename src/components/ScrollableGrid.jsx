import styled from "styled-components";
import fridge from "../assets/refrigerator.png";
const Parent = styled.div`
  overflow-x: scroll;
  width: 100%;
  height: 300px;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
const Card = styled.div`
  width: 92px;
  margin: 5px;
  padding: 14px;
  background: #f5f5f5 0% 0% no-repeat padding-box;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
`;
const Image = styled.img``;

const ScrollableGrid = ({ data }) => {
  return (
    <Parent>
      <Wrapper>
        {data.map((el) => (
          <div>
            <Card>
              <Image src={fridge} alt="fridge" />
              <span style={{ margin: "auto" }}>{el.name}</span>
            </Card>
          </div>
        ))}
      </Wrapper>
    </Parent>
  );
};
export default ScrollableGrid;
