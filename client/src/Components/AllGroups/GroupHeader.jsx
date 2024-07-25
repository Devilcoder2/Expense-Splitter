import PropTypes from "prop-types";
import { useState } from "react";

const GroupHeader = ({ debts, profile }) => {
  const [showForm, setShowForm] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="p-4">
      <header className="flex justify-between items-center bg-pink-200 p-4 rounded-md shadow-md">
        <div className="flex space-x-8 ml-10 border border-gray-300 rounded-md p-2">
          <div className="text-center ">
            <div className="text-lg font-semibold text-gray-700">
              ₹{debts.owedByYou}
            </div>
            <div className="text-sm font-light text-gray-600">Owed by you</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-700">
              ₹{debts.owedToMe}
            </div>
            <div className="text-sm font-light text-gray-600">Owed to you</div>
          </div>
        </div>

        <div className="flex items-center">
          <img
            onClick={toggleSidebar}
            src={
              profile.image ||
              "https://w7.pngwing.com/pngs/962/948/png-transparent-bitstrips-avatar-sticker-snap-inc-cheering-grads-mammal-heroes-hand.png"
            }
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
          />
        </div>
      </header>
      {showForm && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-50"
          onClick={toggleForm}
        ></div>
      )}
      {showForm && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-lg z-50">
          <form>
            <div className="mb-4">
              <label
                htmlFor="groupName"
                className="block text-gray-700 font-semibold"
              >
                Name of Group
              </label>
              <input
                type="text"
                className="pl-2 mt-1 block w-full border-gray-400 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                id="groupName"
                placeholder="Name of Group"
              ></input>
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
                className="pl-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                placeholder="Enter the Group Description"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="addMembers"
                className="block text-gray-700 font-semibold"
              >
                Add Members
              </label>
              <input
                type="text"
                id="addMembers"
                className="pl-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                placeholder="Add Members"
              ></input>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-[#808080] text-white rounded-md font-light transition duration-200 ease-linear"
            >
              Create Group
            </button>
          </form>
        </div>
      )}
      {showSidebar && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleSidebar}
          ></div>
          <div className="relative w-80 bg-white p-4 shadow-lg">
            <div className="text-right">
              <button
                onClick={toggleSidebar}
                className="text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </div>
            <div className="mt-4">
              <img
                src={
                  profile.image ||
                  "https://w7.pngwing.com/pngs/962/948/png-transparent-bitstrips-avatar-sticker-snap-inc-cheering-grads-mammal-heroes-hand.png"
                }
                className="w-20 h-20 rounded-full mx-auto object-cover"
              />
              <h2 className="text-center text-lg font-semibold mt-2">
                {profile.name}
              </h2>
              <p className="text-center text-sm text-gray-600">
                {profile.email}
              </p>
              <div className="mt-4">
                <p className="text-center text-sm text-gray-700">
                  Total Owed By You: ₹{profile.totalOwedByYou}
                </p>
                <p className="text-center text-sm text-gray-700">
                  Total Owed To You: ₹{profile.totalOwedToMe}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

GroupHeader.propTypes = {
  debts: PropTypes.shape({
    owedByYou: PropTypes.number.isRequired,
    owedToMe: PropTypes.number.isRequired,
  }).isRequired,
  profile: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    totalOwedByYou: PropTypes.number.isRequired,
    totalOwedToMe: PropTypes.number.isRequired,
  }).isRequired,
};

export default GroupHeader;
