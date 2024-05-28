import styled from "styled-components";
const Parent = styled.div`
  margin: auto;
  margin-bottom: -25px;
  position: relative;
  border-radius: 5px;
  width: 70px;
  height: 30px;
  color: #ff9a26;
  cursor: pointer;
`;
const BaseForBoth = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
`;
const AddIcon = styled(BaseForBoth)`
  z-index: 1;
  font-size: 10px;
  left: 60px;
  top: 0;
`;
const AddText = styled(BaseForBoth)`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  vertical-align: middle;
  background-color: #fff;
  border: 1px solid #ff9a26;
  border-radius: 5px;
  cursor: pointer;
`;

const AddButton = () => {
  return (
    <Parent>
      <AddIcon>+</AddIcon>
      <AddText className="bold">
        <div style={{ margin: "auto" }}>Add</div>
      </AddText>
    </Parent>
  );
};
export default AddButton;
