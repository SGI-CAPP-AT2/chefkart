import { useParams } from "react-router-dom";
import { useTitle } from "../context/title.context";
import { useEffect, useState } from "react";
import Cover from "../components/Cover";
import styled from "styled-components";
import AccordianTable from "../components/AccordianTable";
import { shapeData } from "../helpers/shapeData";
import ScrollableGrid from "../components/ScrollableGrid";
import LoadingScreen from "../components/LoadingScreen";
const Body = styled.div`
  padding: 15px;
  width: calc(100% - 30px);
`;
const BodyTitle = styled.div`
  font-size: 30px;
  border-bottom: 1px solid #f2f2f2;
`;
const Subtitle = styled.div`
  color: #a3a3a3;
  margin-bottom: 30px;
`;
const Divider = styled.div`
  width: 100%;
  border-bottom: 2px solid #f2f2f2;
`;
const ProductPage = () => {
  const setTitle = useTitle();
  setTitle(null);
  const [data, setData] = useState();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      const fetched = await fetch(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/" +
          id
      );
      const json = await fetched.json();
      setData(json);
    };
    fetchData();
  }, [id]);
  console.log(data);
  return (
    <>
      {" "}
      {data && (
        <div style={{ height: "100%", overflow: "scroll" }}>
          <Cover
            title={data.name}
            subtitle={
              "Mughlai Masala is a style of cookery developed in the Indian Subcontinent by the imperial kitchens of the Mughal Empire."
            }
            time={data.timeToPrepare}
          />
          <Body>
            <BodyTitle className="bold">Ingredients</BodyTitle>
            <Subtitle>For 2 People</Subtitle>
            <Divider />
            <AccordianTable
              title={"Spices"}
              data={shapeData(data.ingredients.spices)}
            />
            <AccordianTable
              title={"Vegetables"}
              data={shapeData(data.ingredients.vegetables)}
            />
          </Body>
          <Divider />
          <Body>
            <BodyTitle>Appliances</BodyTitle>
            <ScrollableGrid data={data.ingredients.appliances} />
          </Body>
        </div>
      )}
      {!data && <LoadingScreen />}
    </>
  );
};
export default ProductPage;
