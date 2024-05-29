import styled from "styled-components";
import Appliances from "./Appliances";
import LinkToProductPage from "./LinkToProductPage";

const Parent = styled.div`
  display: flex;
  margin-top: 10px;
`;
const Divider = styled.div`
  height: 30px;
  width: 1px;
  background-color: #f2f2f2;
  margin: 5px;
`;
const MiddleFlexBox = ({ id, appliances }) => {
  return (
    <Parent>
      <Appliances appliances={appliances} />
      <Divider />
      <LinkToProductPage id={id} />
    </Parent>
  );
};
export default MiddleFlexBox;
