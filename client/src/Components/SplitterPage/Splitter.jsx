/* eslint-disable react-hooks/exhaustive-deps */
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
        <SplitterHeader groupDetails={groupDetails} />
      )}

      <div className="w-[80vw] h-[80vh] bg-gray-100 rounded-lg mx-auto mt-10 mb-60 relative  overflow-y-scroll">
        {allExpenses !== null && (
          <div className="h-[80%] overflow-y-scroll scrollbar-hide mt-10">
            <SplitHistory allExpenses={allExpenses} />
          </div>
        )}
        {groupDetails !== null && (
          <NewSplit groupMembers={groupDetails.members} />
        )}
      </div>
    </div>
  );
};

export default Splitter;
