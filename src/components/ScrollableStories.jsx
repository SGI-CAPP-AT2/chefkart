import styled from "styled-components";
import StoryCircle from "./StoryCircle";

const Parent = styled.div`
  width: 100%;
  height: auto;
  overflow: scroll;
  display: flex;
`;
const Stories = styled.div`
  display: flex;
  margin: auto;
`;
const ScrollableStoriesBox = ({ data }) => {
  // props to each node name image
  return (
    <Parent>
      <Stories>
        {data.map(({ name, image }) => (
          <StoryCircle text={name} src={image} />
        ))}
      </Stories>
    </Parent>
  );
};
export default ScrollableStoriesBox;
