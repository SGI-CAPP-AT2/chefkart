import DateTimeBanner from "../components/DateTimeBanner";
import ScrollableChipsBox from "../components/ScrollableChipsBox";
import chips_data from "../data/cats.json";
import { useTitle } from "../context/title.context";

const SelectItems = () => {
  const setTitle = useTitle();
  setTitle("Select Dishes");
  console.log(chips_data);
  return (
    <div>
      <DateTimeBanner />
      <ScrollableChipsBox data={chips_data} />
    </div>
  );
};
export default SelectItems;
