// const singleExpense = {
//   description: "Dinner at restaurant",
//   totalAmount: 150,
//   dateOfSplit: "2024-07-01",
//   splitBy: "user1",
//   userInExpense: [
//     {
//       userId: "user1",
//       amountToPay: 50,
//       paid: true,
//     },
//     {
//       userId: "user2",
//       amountToPay: 50,
//       paid: false,
//     },
//     {
//       userId: "user3",
//       amountToPay: 50,
//       paid: true,
//     },
//   ],
// };

import { LuClock } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { FaUserGroup } from "react-icons/fa6";

const HistoryCard = () => {
  return (
    <div className=" bg-pink-400 w-[25%] h-[21vh] pl-3 pt-2 rounded-xl ml-10 space-y-1">
      {/* Expense Description  */}
      <div>
        <h1 className="font-semibold ">
          Requested for <q>Gym Subscription</q>
        </h1>
      </div>

      {/* Total Amount  */}
      <div>
        <h1 className="font-semibold text-2xl ">₹150</h1>
      </div>

      {/* Users in the expense  */}
      <div>
        <h5>
          <FaUserGroup fontSize={"20px"} />
        </h5>
      </div>

      {/* Progress Bar for showing how many have paid the money  */}
      <div>Progress Bar</div>

      {/* Payed or not payed + date of split  */}
      <div className="flex items-center text-gray-100 text-sm space-x-1">
        <div>
          <LuClock />
        </div>

        <div className="flex items-center space-x-1">
          <h2>0 of 2 paid</h2>
          <h2>
            <GoDotFill />
          </h2>
          <h2>9 Jul</h2>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
