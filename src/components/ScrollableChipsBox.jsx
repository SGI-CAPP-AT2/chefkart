import styled from "styled-components";
import Chip from "./Chip";

const Parent = styled.div`
  width: 100%;
  height: auto;
  overflow: scroll;
  display: flex;
`;
const ChipsParent = styled.div`
  display: flex;
  margin: auto;
`;
const ChipText = styled.div`
  margin-right: 15px;
  margin-left: 15px;
`;
const ScrollableChipsBox = ({ data }) => {
  return (
    <Parent>
      <ChipsParent>
        {data.map(({ el, active }) => (
          <Chip key={el} active={active}>
            <ChipText className={active && "bold"}>{el}</ChipText>
          </Chip>
        ))}
      </ChipsParent>
    </Parent>
  );
};
export default ScrollableChipsBox;
