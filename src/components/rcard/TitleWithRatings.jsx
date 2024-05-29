import styled from "styled-components";
import vegsvg from "../../assets/veg.svg";
import Rating from "../Rating";
const Parent = styled.div`
  display: flex;
  vertical-align: auto;
`;
const TitleText = styled.div`
  font-size: 20px;
  margin-top: auto;
  max-width: 70%;
  margin-bottom: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const PureVeg = styled.div`
  background-image: url(${vegsvg});
  background-repeat: no-repeat;
  width: 15px;
  background-position: center;
  background-size: contain;
  margin-left: 10px;
`;
const TitleWithRatings = ({ title, rating }) => {
  return (
    <Parent>
      <TitleText className="bold">{title}</TitleText>
      <PureVeg />
      <Rating rate={rating} />
    </Parent>
  );
};
export default TitleWithRatings;
