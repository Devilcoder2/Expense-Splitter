import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";

const CreateGroupForm = ({ toggleForm, addGroup }) => {
  const [groupName, setGroupName] = useState("");
  const [groupDesc, setGroupDesc] = useState("");
  const [memberEmails, setMemberEmails] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    //const emails = memberEmails.split(",").map((email) => email.trim());
    const members = [];

    // Validate each email
    /* for (const email of emails) {
      try {
        // Here you should replace with your API endpoint for validating user
        const response = await axios.get(
          `http://localhost:3000/user/validateEmail?email=${email}`
        );
        members.push({ userId: response.data.userId });
      } catch (error) {
        if (error.response && error.response.data.msg === "User not found") {
          setError(`User with email ${email} not found`);
          return;
        }
        setError("An error occurred while validating emails");
        return;
      }
    } */

    // Send request to create the group
    try {
      const response = await axios.post("http://localhost:3000/user/newGroup", {
        groupName,
        email: memberEmails,
        members,
      });

      if (response.data.msg === "Group Created Successfully") {
        addGroup(response.data.group);
        toggleForm();
      } else {
        setError("Failed to create group");
      }
    } catch (error) {
      setError("An error occurred while creating the group");
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-50 z-50"
        onClick={toggleForm}
      ></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-lg z-50">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="groupName"
              className="block text-gray-700 font-semibold"
            >
              Name of Group
            </label>
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="pl-2 mt-1 block w-full border-gray-400 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              id="groupName"
              placeholder="Name of Group"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="groupDesc"
              className="block text-gray-700 font-semibold"
            >
              Description of Group
            </label>
            <textarea
              id="groupDesc"
              rows="5"
              value={groupDesc}
              onChange={(e) => setGroupDesc(e.target.value)}
              className="pl-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              placeholder="Enter the Group Description"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="addMembers"
              className="block text-gray-700 font-semibold"
            >
              Add Members (comma-separated emails)
            </label>
            <input
              type="text"
              id="addMembers"
              value={memberEmails}
              onChange={(e) => setMemberEmails(e.target.value)}
              className="pl-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              placeholder="Add Members"
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="shadow-[0_4px_14px_0_rgb(128,128,128,0.39)] hover:shadow-[0_6px_20px_rgba(128,128,128,0.23)] hover:bg-[rgba(128,128,128,0.9)] px-4 py-2 bg-[#808080] rounded-md text-white font-light transition duration-200 ease-linear"
          >
            Create Group
          </button>
        </form>
      </div>
    </>
  );
};

CreateGroupForm.propTypes = {
  toggleForm: PropTypes.func.isRequired,
  addGroup: PropTypes.func.isRequired,
};

export default CreateGroupForm;
