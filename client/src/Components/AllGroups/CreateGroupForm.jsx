import axios from "axios";
import { useState } from "react";

const CreateGroupForm = ({ setIsFormVisible, setIsChanged }) => {
  const [userName, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [allUsers, setAllUsers] = useState(null);
  const [areAllMembersVisible, setAreAllMembersVisible] = useState(false);
  const [addedMembers, setAddedMembers] = useState([]);

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const submitHandler = async () => {
    const token = localStorage.getItem("token");
    const members = addedMembers.map((userId) => {
      return { userId: userId };
    });

    const body = {
      groupName: userName,
      members: members,
    };

    const response = await axios.post(
      "http://localhost:3000/user/newGroup",
      body,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    if (response.status === 200) {
      setIsChanged((prev) => !prev);
    }
  };

  const cancelHandler = () => {
    setIsFormVisible(false);
  };

  const addMembersHandler = async () => {
    setAreAllMembersVisible(true);
    const response = await axios.get("http://localhost:3000/user/allUsers");
    setAllUsers(response.data.users);
  };

  const cancelAddMemberHandler = () => {
    setAreAllMembersVisible(false);
  };

  const addThisMember = (userId) => {
    setAddedMembers((prev) => {
      const isUserPresent = prev.filter((uid) => uid === userId);

      if (isUserPresent.length !== 0) return prev;

      const newMembers = [...prev, userId];
      return newMembers;
    });
  };

  const deleteThisUserHandler = (userId) => {
    setAddedMembers((prev) => {
      const newMembers = prev.filter((uId) => uId !== userId);
      return newMembers;
    });
  };

  return (
    <div className="border border-black">
      {/* name */}
      <div>
        <input
          className="border border-black"
          type="text"
          value={userName}
          onChange={userNameChangeHandler}
        />
      </div>

      {/* description */}
      <div>
        <input
          className="border border-black"
          type="text"
          value={description}
          onChange={descriptionChangeHandler}
        />
      </div>

      <div>
        {addedMembers.map((userId) => {
          return (
            <div className="flex" key={userId}>
              <h1 className="font-semibold">{userId}</h1>
              <button
                onClick={() => {
                  deleteThisUserHandler(userId);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>

      {/* members */}
      <button onClick={addMembersHandler}>Add members</button>

      {/* show all users  */}
      <div>
        {areAllMembersVisible && allUsers !== null && (
          <div className="flex flex-col">
            {allUsers.map((user) => {
              return (
                <div className="flex" key={user._id}>
                  <h1 className="font-bold">{user.name}</h1>
                  <button
                    onClick={() => {
                      addThisMember(user._id);
                    }}
                  >
                    Add
                  </button>
                </div>
              );
            })}

            <button onClick={cancelAddMemberHandler}>Cancel</button>
          </div>
        )}
      </div>

      {/* submit  */}
      <button className="border border-blue-400" onClick={submitHandler}>
        Submit
      </button>

      {/* cancel */}
      <button className="border border-blue-400" onClick={cancelHandler}>
        Cancel
      </button>
    </div>
  );
};

export default CreateGroupForm;
