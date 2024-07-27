import axios from "axios";
import { useEffect, useState } from "react";

const Debts = () => {
  const [debts, setDebts] = useState({ owedByYou: 0, owedToMe: 0 });

  useEffect(() => {
    const fetchDebts = async () => {
      const token = localStorage.getItem("token");
      const data = await axios.get(
        "http://localhost:3000/user/allGroupsDebts",
        { headers: { Authorization: token } }
      );

      if (data.status === 200) {
        setDebts({
          owedByYou: data.data.owedByYou,
          owedToMe: data.data.owedToMe,
        });
      } else {
        console.log("Error happend in getting all debts");
      }
    };

    fetchDebts();
  }, []);

  return (
    <div className="flex space-x-8 ml-10  rounded-md p-2">
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
  );
};

export default Debts;
