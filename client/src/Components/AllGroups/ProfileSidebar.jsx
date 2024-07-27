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
        <button onClick={getMyProfileHandler}>Get my profile</button>
      </div>
    </div>
  );
};

export default ProfileSidebar;
