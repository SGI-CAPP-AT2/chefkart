import styled from "styled-components";
import arrowdropdown from "../assets/arrowdropdown.svg";
import TableRow from "./TableRow";
import { useState } from "react";
const ParentContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  overflow: hidden;
`;
const AccordianTitle = styled.div`
  font-size: 20px;
  width: 100%;
  display: flex;
  vertical-align: middle;
`;
const DataTable = styled.div`
  display: flex;
  flex-direction: column;
  transition: 1s;
`;
const ArrowDropDown = styled.div`
  width: 30px;
  background-image: url(${arrowdropdown});
  background-repeat: no-repeat;
  background-position: center;
  margin-left: 10px;
  background-size: 25px;
`;
const AccordianTable = ({ title, data }) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <ParentContainer>
      <AccordianTitle className="bold" onClick={() => setCollapsed(!collapsed)}>
        {title} ({data.length}) <ArrowDropDown />
      </AccordianTitle>
      <DataTable style={{ height: collapsed ? "auto" : "0px" }}>
        {data.map((el) => (
          <TableRow key={el} keyVal={el.key} value={el.value} />
        ))}
      </DataTable>
    </ParentContainer>
  );
};
export default AccordianTable;
