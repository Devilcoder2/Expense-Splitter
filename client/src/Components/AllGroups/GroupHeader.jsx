import Debts from "./Debts";
import ProfileSidebar from "./ProfileSidebar";

const GroupHeader = () => {
  return (
    <div className="p-4">
      <header className="flex justify-between items-center bg-pink-200 p-4 rounded-md shadow-md">
        <div className="flex space-x-8 ml-10 border border-gray-300 rounded-md p-2">
          {/* LOGO  */}
          <div></div>

          <Debts />

          <ProfileSidebar />
        </div>
      </header>
    </div>
  );
};

export default GroupHeader;
