import NewSplit from "./NewSplit";
import SplitHistory from "./SplitHistory";
import SplitterHeader from "./SplitterHeader";

const Splitter = () => {
  return (
    <div className="px-10 ">
      <SplitterHeader />
      <SplitHistory />
      <NewSplit />
    </div>
  );
};

export default Splitter;
