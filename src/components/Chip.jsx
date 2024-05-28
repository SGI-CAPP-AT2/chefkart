import styled from "styled-components";

const Chip = styled.div`
  padding: 5px 15px;
  margin: 10px;
  border-radius: 17px;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  ${(props) =>
    props.active &&
    `
    background: #FFF9F2 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #FFF9F2;
    border: 0.5px solid #FF941A;
    color:#FF941A;
  `}
  ${(props) =>
    !props.active &&
    `
    border: 0.5px solid #BDBDBD;
  `}
`;

export default Chip;
