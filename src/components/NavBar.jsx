import styled from "styled-components";
import backbuttonsvg from "../assets/backbutton.svg";
import { useEffect, useRef } from "react";
const NavBarStyle = styled.div`
  width: 100%;
  height: 47px; // as per the design
  padding: 5px;
  display: flex;
  vertical-align: middle;
`;
const BackButtonStyle = styled.a`
  background-image: url(${backbuttonsvg});
  background-repeat: no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
  margin: auto;
  margin-left: 10px;
`;
const TitleStyle = styled.div`
  margin: auto;
  margin-left: 10px;
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
