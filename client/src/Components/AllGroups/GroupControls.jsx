import CreateNewGroup from "./CreateNewGroup";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GroupControls = () => {
  const [allGroups, setAllGroups] = useState([]);
  const [filteredAllGroups, setFilteredAllGroups] = useState([]);
  const [isChanged, setIsChanged] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllGroups = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/user/allGroups", {
        headers: {
          Authorization: token,
        },
      });

      setAllGroups(response.data.groupDetails);
      setFilteredAllGroups(response.data.groupDetails);
    };

    fetchAllGroups();
  }, [isChanged]);

  const groupClickedHandler = (groupId) => {
    navigate(`/group/${groupId}`);
  };

  return (
    <div>
      <CreateNewGroup setIsChanged={setIsChanged} />

      {/* Search  */}
      <div></div>

      <div>
        {filteredAllGroups.map((group) => {
          return (
            <div
              className="hover:cursor-pointer"
              onClick={() => {
                groupClickedHandler(group._id);
              }}
              key={group._id}
            >
              {group.groupName}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupControls;
