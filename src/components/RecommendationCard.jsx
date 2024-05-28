import styled from "styled-components";
import TitleWithRatings from "./rcard/TitleWithRatings";
import MiddleFlexBox from "./rcard/MiddleFlexBox";
import Description from "./rcard/Description";
import ImageWithButton from "./rcard/ImageWithButton";

const Parent = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
`;
const Left = styled.div`
  margin-left: 0px;
  max-width: 70%;
`;
const Right = styled.div`
  margin-right: 0px;
  margin-left: auto;
`;
const RecommendationCard = ({ data }) => {
  const { name, rating, id, equipments, description, image } = data;
  return (
    <Parent>
      <Left>
        <TitleWithRatings title={name} rating={rating} />
        <MiddleFlexBox id={id} appliances={equipments} />
        <Description>{description}</Description>
      </Left>
      <Right>
        <ImageWithButton image={image} />
      </Right>
    </Parent>
  );
};
export default RecommendationCard;
