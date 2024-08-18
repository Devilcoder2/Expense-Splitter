import { useEffect, useState } from "react";
import NewSplit from "./NewSplit";
import SplitHistory from "./SplitHistory";
import SplitterHeader from "./SplitterHeader";
import { useParams } from "react-router-dom";
import axios from "axios";

const Splitter = () => {
  const [groupDetails, setGroupDetails] = useState(null);
  const [allExpenses, setAllExpenses] = useState(null);
  const { groupId } = useParams();

  const fetchGroupDetails = async () => {
    const response = await axios.get(
      `http://localhost:3000/user/groupDetails/${groupId}`
    );

    setGroupDetails(response.data.group);
  };

  const fetchAllExpensesOfGroup = async () => {
    const response = await axios.get(
      `http://localhost:3000/user/allExpenses/${groupId}`
    );

    console.log(response.data.expenses.singleExpenses);
    setAllExpenses(response.data.expenses.singleExpenses);
  };

  useEffect(() => {
    fetchGroupDetails();
    fetchAllExpensesOfGroup();
  }, []);

  return (
    <div className="px-10 bg-gradient-to-r from-pink-400 to-pink-600 text-white h-[100vh]">
      {groupDetails !== null && (
        <SplitterHeader groupName={groupDetails.groupName} />
      )}

      <div className="w-[80vw] h-[80vh] bg-gray-100 rounded-lg mx-auto mt-10 relative">
        <SplitHistory />
        <NewSplit />
      </div>
    </div>
  );
};

export default Splitter;
