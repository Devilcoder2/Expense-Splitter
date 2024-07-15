import { useState } from "react";

const GroupHeader = () => {
  const [showForm, setShowForm] = useState(false);

  //funtion to toggle the form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  //function to handle form submission

  return (
    <div className="p-4">
      <header className="flex justify-between items-center bg-pink-200 p-4 rounded-md shadow-md">
        <div className="flex space-x-8 ml-10 border border-gray-300 rounded-md p-2">
          {/**first block*/}
          <div className="text-center ">
            <div className="text-lg font-semibold text-gray-700">₹55555</div>
            <div className="text-sm font-light text-gray-600">Owed by you</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-700">₹55555</div>
            <div className="text-sm font-light text-gray-600">Owed to you</div>
          </div>
        </div>

        {/**Second block for button */}
        <div>
          <button
            onClick={toggleForm}
            className="shadow-[0_4px_14px_0_rgb(128,128,128,0.39)] hover:shadow-[0_6px_20px_rgba(128,128,128,0.23)] hover:bg-[rgba(128,128,128,0.9)] px-4 py-2 bg-[#808080] rounded-md text-white font-light transition duration-200 ease-linear"
          >
            Create New Group
          </button>
        </div>

        {/**Profile block */}
        <div className="flex items-center">
          <img
            src="https://w7.pngwing.com/pngs/962/948/png-transparent-bitstrips-avatar-sticker-snap-inc-cheering-grads-mammal-heroes-hand.png"
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
          />
        </div>
      </header>

      {/**Form Section */}

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
    </div>
  );
};

export default GroupHeader;
