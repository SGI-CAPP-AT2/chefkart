import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Parent = styled.div`
  margin: auto;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;
const Ingredients = styled.div`
  font-size: 12px;
  margin-left: 0px;
`;
const Link = styled.div`
  color: #ff8800;
  display: flex;
  font-size: 10px;
  cursor: pointer;
`;
const LinkToProductPage = ({ id }) => {
  const navigate = useNavigate();
  return (
    <Parent>
      <Ingredients className="bold">Ingredients</Ingredients>
      <Link
        onClick={() => {
          navigate("/prod/" + id);
        }}
      >
        View List &gt;
      </Link>
    </Parent>
  );
};
export default LinkToProductPage;
