import styled from "styled-components";
import star from "../assets/star.svg";
const Parent = styled.div`
  display: flex;
  background-color: #51c452;
  border-radius: 2px;
  font-size: 12px;
  display: flex;
  vertical-align: center;
  margin: 10px;
  padding: 2px 6px;
`;
const Star = styled.div`
  background-image: url(${star});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 10px;
`;
const Text = styled.div`
  margin: auto;
  margin-right: 5px;
  color: #fff;
`;
const Rating = ({ rate }) => {
  return (
    <Parent>
      <Text className="bold">{rate}</Text>
      <Star />
    </Parent>
  );
};
export default Rating;
