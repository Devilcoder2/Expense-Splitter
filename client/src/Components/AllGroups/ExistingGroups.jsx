const ExistingGroups = () => {
  return (
    <div className="bg-pink-100 mt-4">
      <div className="flex justify-center mb-4 ">
        <input
          type="text"
          placeholder="Enter Group Name..."
          className="px-2 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-400"
        />
        <button className="shadow-[0_4px_14px_0_rgb(128,128,128,0.39)] hover:shadow-[0_6px_20px_rgba(128,128,128,0.23)] hover:bg-[rgba(128,128,128,0.9)] mt-2 ml-4 px-2 py-1 bg-[#808080] rounded-md text-white font-light transition duration-200 ease-linear">
          Search Group
        </button>
      </div>

      <div className="grid grid-cols-6 gap-4">
        <div className="text-center">
          <img
            src="https://w7.pngwing.com/pngs/962/948/png-transparent-bitstrips-avatar-sticker-snap-inc-cheering-grads-mammal-heroes-hand.png"
            className="w-16 h-16 rounded-full object-cover mx-auto"
          />
          <div>Group 1</div>
        </div>
        <div className="text-center">
          <img
            src="https://w7.pngwing.com/pngs/962/948/png-transparent-bitstrips-avatar-sticker-snap-inc-cheering-grads-mammal-heroes-hand.png"
            className="w-16 h-16 rounded-full object-cover mx-auto"
          />
          <div>Group 1</div>
        </div>
        <div className="text-center">
          <img
            src="https://w7.pngwing.com/pngs/962/948/png-transparent-bitstrips-avatar-sticker-snap-inc-cheering-grads-mammal-heroes-hand.png"
            className="w-16 h-16 rounded-full object-cover mx-auto"
          />
          <div>Group 1</div>
        </div>
        <div className="text-center">
          <img
            src="https://w7.pngwing.com/pngs/962/948/png-transparent-bitstrips-avatar-sticker-snap-inc-cheering-grads-mammal-heroes-hand.png"
            className="w-16 h-16 rounded-full object-cover mx-auto"
          />
          <div>Group 1</div>
        </div>
      </div>
    </div>
  );
};

export default ExistingGroups;