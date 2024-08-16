import axios from "axios";
import { useState } from "react";

const ProfileSidebar = () => {
  const [userDetails, setUserDetails] = useState(null);

  const getMyProfileHandler = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:3000/user/myProfile", {
      headers: {
        Authorization: token,
      },
    });

    setUserDetails(response.data.user);
  };

  return (
    <div>
      <div>
        <div className="flex items-center justify-center py-2 ">
          <button onClick={getMyProfileHandler} className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 font-bold bg-white rounded-[6px] relative group transition duration-200 text-black hover:bg-transparent">
              Your Profile
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
