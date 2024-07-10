import NewSplit from "./NewSplit";
import SplitHistory from "./SplitHistory";
import SplitterHeader from "./SplitterHeader";

const Splitter = () => {
  return (
    <div className="px-10 bg-gradient-to-r from-pink-400 to-pink-600 text-white h-[100vh]">
      <SplitterHeader />
      <SplitHistory />
      <NewSplit />
    </div>
  );
};

export default Splitter;
