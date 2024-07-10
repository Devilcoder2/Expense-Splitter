import NewSplit from "./NewSplit";
import SplitHistory from "./SplitHistory";
import SplitterHeader from "./SplitterHeader";

const Splitter = () => {
  return (
    <div className="px-10 bg-gradient-to-r from-pink-400 to-pink-600 text-white h-[100vh]">
      <SplitterHeader />

      <div className="w-[80vw] h-[80vh] bg-gray-100 rounded-lg mx-auto mt-10 relative">
        <SplitHistory />
        <NewSplit />
      </div>
    </div>
  );
};

export default Splitter;
