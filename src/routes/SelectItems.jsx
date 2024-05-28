import DateTimeBanner from "../components/DateTimeBanner";
import ScrollableChipsBox from "../components/ScrollableChipsBox";
import chips_data from "../data/cats.json";
import { useTitle } from "../context/title.context";
import ScrollableStoriesBox from "../components/ScrollableStories";
import { useEffect, useState } from "react";
import styled from "styled-components";
const Title = styled.div`
  font-size: 20px;
  margin-left: 25px;
`;
const SelectItems = () => {
  const setTitle = useTitle();
  const [data, setData] = useState(null);
  setTitle("Select Dishes");
  useEffect(() => {
    const fetchData = async () => {
      const fetched = await fetch(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
      );
      const json = await fetched.json();
      setData(json);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      {data && (
        <>
          <DateTimeBanner />
          <ScrollableChipsBox data={chips_data} />
          <Title className="bold">Popular Dishes</Title>
          <ScrollableStoriesBox data={data.popularDishes} />
        </>
      )}
    </div>
  );
};
export default SelectItems;
