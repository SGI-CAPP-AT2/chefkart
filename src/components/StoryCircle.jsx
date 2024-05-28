import styled from "styled-components";

const Circle = styled.div`
  box-shadow: inset 0 0 1000px rgba(0, 0, 0, 0.1), inset 0 0 0 3px #fff;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  margin: 15px;
  border: 2px solid orange;
`;
const TextInsideCircle = styled.div`
  margin: auto;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #ffffff;
`;
const StoryCircle = ({ src, text }) => {
  return (
    <Circle style={{ backgroundImage: `url(${src})` }}>
      <TextInsideCircle className="bold">{text}</TextInsideCircle>
    </Circle>
  );
};
export default StoryCircle;
