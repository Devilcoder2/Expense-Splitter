import { useState } from "react";
import CreateGroupForm from "./CreateGroupForm";

//show all groups
const CreateNewGroup = ({ setIsChanged }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const createGroupHandler = () => {
    setIsFormVisible(true);
  };

  return (
    <div>
      <div className="flex items-center justify-center py-2 ">
        <button onClick={createGroupHandler} className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2 font-bold bg-white rounded-[6px] relative group transition duration-200 text-black hover:bg-transparent">
            Create New Group
          </div>
        </button>
      </div>

      <div>
        {isFormVisible && (
          <CreateGroupForm
            setIsFormVisible={setIsFormVisible}
            setIsChanged={setIsChanged}
          />
        )}
      </div>
    </div>
  );
};

export default CreateNewGroup;
