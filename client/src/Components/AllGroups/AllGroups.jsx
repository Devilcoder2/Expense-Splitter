import { useNavigate } from "react-router-dom";
import GroupHeader from "./GroupHeader";
import ExistingGroups from "./ExistingGroups";

const AllGroups = () => {
  const navigate = useNavigate();
  return (
    <div>
      <GroupHeader />
      <ExistingGroups />
    </div>
  );
};

export default AllGroups;
