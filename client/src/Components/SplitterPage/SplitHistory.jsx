/* eslint-disable react/prop-types */
import HistoryCard from "./HistoryCard";

const SplitHistory = ({ allExpenses }) => {
  const currentUserId = localStorage.getItem("userId");

  const getDate = (dateOfSplit) => {
    const date = new Date(dateOfSplit);

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Extract the day and month
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    return { day, month };
  };

  return (
    <div className="">
      {allExpenses.length !== 0 &&
        allExpenses.map((expense) => {
          const { day, month } = getDate(expense.dateOfSplit);

          return (
            <HistoryCard
              key={expense._id}
              description={expense.description}
              totalAmount={expense.totalAmount}
              day={day}
              month={month}
              isSameUser={expense.splittedBy === currentUserId}
            />
          );
        })}
    </div>
  );
};

export default SplitHistory;
