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
      <button onClick={createGroupHandler}>Create New Group</button>

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
