import { useState, useEffect } from "react";
import axios from "axios";
import GroupHeader from "./GroupHeader";
import ExistingGroups from "./ExistingGroups";
import CreateGroupForm from "./CreateGroupForm";

const AllGroups = () => {
  const [debts, setDebts] = useState({ owedByYou: 0, owedToMe: 0 });
  const [profile, setProfile] = useState({});
  const [groups, setGroups] = useState([]);
  const [showCreateGroupForm, setShowCreateGroupForm] = useState(false);
  const userEmail = "your_email@example.com";

  const fetchDebts = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/user/allGroupsDebts",
        { email: userEmail }
      );
      if (response.data.msg === "Successfully found all debts") {
        setDebts({
          owedByYou: response.data.owedByYou,
          owedToMe: response.data.owedToMe,
        });
      } else {
        console.log("Email not found");
      }
    } catch (error) {
      console.log("Error fetching debts", error);
    }
  };

  const fetchProfile = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/user/myProfile",
        { email: userEmail }
      );
      if (response.data.msg === "Successfully found the user") {
        setProfile(response.data.user);
      } else {
        console.log("User not found");
      }
    } catch (error) {
      console.log("Error fetching profile", error);
    }
  };

  const fetchGroups = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/user/allGroups",
        {
          email: userEmail,
        }
      );
      if (response.data.msg === "All groups details found successfully") {
        setGroups(response.data.groupDetails);
      } else {
        console.log("User not found");
      }
    } catch (error) {
      console.log("Error fetching groups", error);
    }
  };

  const addGroup = (newGroup) => {
    setGroups((prevGroups) => [...prevGroups, newGroup]);
  };

  useEffect(() => {
    fetchDebts();
    fetchProfile();
    fetchGroups();
  }, []);

  return (
    <div>
      <GroupHeader debts={debts} profile={profile} />
      <button
        onClick={() => setShowCreateGroupForm(true)}
        className="px-4 py-2 ml-4 bg-[#808080] text-white rounded-md font-light transition duration-200 ease-linear"
      >
        Create New Group
      </button>
      {showCreateGroupForm && (
        <CreateGroupForm
          toggleForm={() => setShowCreateGroupForm(false)}
          addGroup={addGroup}
        />
      )}
      <ExistingGroups groups={groups} />
    </div>
  );
};

export default AllGroups;
