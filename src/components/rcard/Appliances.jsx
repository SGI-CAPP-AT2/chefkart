import styled from "styled-components";
import refriIcon from "../../assets/refri-icon.svg";
const Parent = styled.div`
  display: flex;
  margin: auto;
  margin-left: 10px;
  margin-right: 0;
`;
const ApplianceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ImageOfAppliance = styled.img`
  margin: auto;
  height: 30px;
`;
const TextOfAppliance = styled.div`
  margin: auto;
  font-size: 10px;
`;
const Appliances = ({ appliances }) => {
  console.log(appliances);
  return (
    <Parent>
      {appliances.map((name) => (
        <ApplianceContainer>
          <ImageOfAppliance src={refriIcon} alt="appliance" />
          <TextOfAppliance>{name}</TextOfAppliance>
        </ApplianceContainer>
      ))}
    </Parent>
  );
};
export default Appliances;
