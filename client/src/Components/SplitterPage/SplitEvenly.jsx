/* eslint-disable react/prop-types */
// SplitEvenly.js
const SplitEvenly = ({
    totalAmount,
    usersInGroup,
    checkedStates,
    handleCheckboxChange,
}) => {
    
    //calculated the total number of checked users 
    const totalUsers = Object.values(checkedStates).filter(
        (user) => user
    ).length;

    //calculates the amount to be paid by each selected member
    const splitEvenlyValue = totalUsers > 0 ? totalAmount / totalUsers : 0;

    return (
        <div className='bg-white p-4 rounded-md shadow-md'>
            {/* HEADING  */}
            <h2 className='text-2xl font-semibold text-white bg-pink-600 p-2 rounded mb-4'>
                Split Evenly
            </h2>

            {/* EACH PERSON SPLIT  */}
            <p className='text-lg font-medium text-gray-800 mb-4'>
                Each person pays:{' '}
                <span className='font-bold'>
                    ${splitEvenlyValue.toFixed(2)}
                </span>
            </p>

            {/* ALL MEMBERS ARE LISTED HERE  */}
            <div className='space-y-2'>
                {usersInGroup?.map((user) => (
                    <div
                        key={user._id}
                        className='flex items-center justify-between p-2 border rounded-md bg-gray-50 hover:bg-gray-100 transition'
                    >
                        <label className='flex items-center space-x-3'>
                            <input
                                type='checkbox'
                                checked={checkedStates[user._id]}
                                onChange={() => handleCheckboxChange(user._id)}
                                className='form-checkbox h-12 w-5 text-pink-600 p-2'
                            />
                            <span className='text-gray-700'>{user.name}</span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SplitEvenly;
