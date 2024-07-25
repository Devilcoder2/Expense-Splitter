import PropTypes from "prop-types";

const ProfileSidebar = ({ profile, toggleSidebar }) => (
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
          className="w-20 h-20 rounded-full mx-auto object-cover cursor-pointer"
        />

        <h2 className="text-center text-lg font-semibold mt-2">
          {profile.name}
        </h2>
        <p className="text-center text-sm text-gray-600">{profile.email}</p>
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
);

ProfileSidebar.propTypes = {
  profile: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    totalOwedByYou: PropTypes.number.isRequired,
    totalOwedToMe: PropTypes.number.isRequired,
  }).isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default ProfileSidebar;
