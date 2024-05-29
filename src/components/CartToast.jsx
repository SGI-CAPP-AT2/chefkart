import styled from "styled-components";
import { useScreen } from "../context/screen.context";
import foodIcon from "../assets/food_icon.svg";
const Parent = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 70px;
`;
const Child = styled.div`
  background: #1c1c1c 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 9px #00000017;
  margin: auto;
  display: flex;
  height: 65px;
  margin-bottom: 5px;
  z-index: 10000;
  border-radius: 10px;
`;
const Icon = styled.div`
  background: url(${foodIcon}) no-repeat;
  background-size: 35px;
  background-position: center;
  margin-left: 0px;
  width: 70px;
`;
const Text = styled.div`
  color: #fff;
  margin-left: 10px;
  margin-top: auto;
  margin-bottom: auto;
`;
const CartToast = () => {
  const { width, viewportwidth } = useScreen();
  return (
    <Parent style={{ width }}>
      <Child style={{ width: viewportwidth - 350 }}>
        <Icon />
        <Text>3 food items selected</Text>
        <Text
          style={{ marginLeft: "auto", marginRight: "30px", fontSize: "20px" }}
        >
          →
        </Text>
      </Child>
    </Parent>
  );
};
export default CartToast;
