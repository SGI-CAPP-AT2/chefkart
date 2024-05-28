import styled from "styled-components";
const Parent = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
`;
const TableCellLeft = styled.div`
  margin-left: 0px;
`;
const TableCellRight = styled.div`
  margin-left: auto;
  margin-right: 0px;
`;
const TableRow = ({ keyVal, value }) => {
  return (
    <Parent>
      <TableCellLeft>{keyVal}</TableCellLeft>
      <TableCellRight>{value}</TableCellRight>
    </Parent>
  );
};
export default TableRow;
