import styled from "styled-components";
import backbuttonsvg from "../assets/backbutton.svg";
import { useEffect, useRef } from "react";
const NavBarStyle = styled.div`
  height: 47px; // as per the design
  padding: 5px;
  display: flex;
  vertical-align: middle;
`;
const BackButtonStyle = styled.a`
  background-image: url(${backbuttonsvg});
  background-repeat: no-repeat;
  background-size: contain;
  width: 15px;
  height: 15px;
  margin: auto;
  margin-left: 10px;
  margin-right: 5px;
`;
const TitleStyle = styled.div`
  margin: auto;
  margin-left: 5px;
`;
const NavBar = ({ backbuttonfn, title, setHeight }) => {
  const navRef = useRef();
  useEffect(() => {
    setHeight(navRef.current.offsetHeight);
  }, [setHeight]);
  return (
    <NavBarStyle ref={navRef}>
      {backbuttonfn && <BackButtonStyle onClick={backbuttonfn} />}
      {title && <TitleStyle>{title}</TitleStyle>}
    </NavBarStyle>
  );
};
export default NavBar;
