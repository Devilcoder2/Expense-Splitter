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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-500 to-gray-200">
      <div className="border border-gray-400 bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* name */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="userName"
          >
            Name
          </label>
          <input
            id="userName"
            className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            value={userName}
            onChange={userNameChangeHandler}
          />
        </div>

        {/* description */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <input
            id="description"
            className="border border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            value={description}
            onChange={descriptionChangeHandler}
          />
        </div>

        {/* members */}
        <div className="mb-4">
          {addedMembers.map((userId) => (
            <div
              className="flex items-center justify-between mb-2"
              key={userId}
            >
              <h1 className="font-semibold text-gray-800">{userId}</h1>
              <button
                className="text-red-500 hover:text-red-700 focus:outline-none"
                onClick={() => deleteThisUserHandler(userId)}
              >
                Delete
              </button>
            </div>
          ))}
          <button
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={addMembersHandler}
          >
            Add members
          </button>
        </div>

        {/* show all users */}
        {areAllMembersVisible && allUsers !== null && (
          <div className="mb-4">
            <div className="flex flex-col space-y-2">
              {allUsers.map((user) => (
                <div
                  className="flex items-center justify-between"
                  key={user._id}
                >
                  <h1 className="font-bold text-gray-800">{user.name}</h1>
                  <button
                    className="text-green-500 hover:text-green-700 focus:outline-none"
                    onClick={() => addThisMember(user._id)}
                  >
                    Add
                  </button>
                </div>
              ))}
            </div>
            <button
              className="w-full py-2 mt-4 bg-gray-500 text-white font-semibold rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
              onClick={cancelAddMemberHandler}
            >
              Cancel
            </button>
          </div>
        )}

        {/* submit and cancel */}
        <div className="flex space-x-4">
          <button
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={submitHandler}
          >
            Submit
          </button>
          <button
            className="w-full py-2 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            onClick={cancelHandler}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupForm;
