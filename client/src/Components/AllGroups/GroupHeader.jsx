import Debts from "./Debts";
import ProfileSidebar from "./ProfileSidebar";

const GroupHeader = () => {
  return (
    <div className="p-4 bg-gray-200">
      <header className="flex justify-between items-center bg-purple-300 p-4 rounded-md shadow-md">
        <div className="flex space-x-8 ml-10 border border-gray-300 rounded-lg p-3 bg-white shadow-inner">
          {/* LOGO */}

          <Debts />
        </div>
        <ProfileSidebar />
      </header>
    </div>
  );
};

export default GroupHeader;
