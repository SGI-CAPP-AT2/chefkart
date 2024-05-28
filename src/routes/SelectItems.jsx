import DateTimeBanner from "../components/DateTimeBanner";
import { useTitle } from "../context/title.context";

const SelectItems = () => {
  const setTitle = useTitle();
  setTitle("Select Dishes");
  return (
    <div>
      <DateTimeBanner />
    </div>
  );
};
export default SelectItems;
