/* eslint-disable react/prop-types */
// SplitByAmount.js
import { useState } from 'react';

const SplitByAmount = ({
    usersInGroup,
    checkedStates,
    handleCheckboxChange,
}) => {

    //State used to set the amount for each selected member
    const [amounts, setAmounts] = useState({});

    //sets the new amount set by the user for each member 
    const handleAmountChange = (userId, amount) => {
        setAmounts({ ...amounts, [userId]: parseFloat(amount) || 0 });
    };

    return (
        <div className='bg-white p-4 rounded-md shadow-md '>
            {/* HEADING  */}
            <h2 className='text-2xl font-semibold text-white bg-pink-600 p-2 rounded mb-4'>
                Split by Amount
            </h2>

            {/* ALL MEMBERS ARE LISTED  */}
            <div className='space-y-3'>
                {usersInGroup?.map((user) => (
                    <div
                        key={user._id}
                        className='flex items-center justify-between p-3 border rounded-md bg-gray-50 hover:bg-gray-100 transition'
                    >
                        {/* RENDERS THE NAME OF THE MEMBERS  */}
                        <label className='flex items-center space-x-3'>
                            <input
                                type='checkbox'
                                checked={checkedStates[user._id]}
                                onChange={() => handleCheckboxChange(user._id)}
                                className='form-checkbox h-5 w-5 text-pink-600'
                            />
                            <span className='text-gray-700'>{user.name}</span>
                        </label>

                        {/* INPUT FOR AMOUNT FOR EACH MEMBER  */}
                        <input
                            type='number'
                            value={checkedStates[user._id] ? amounts[user._id] || '' : 0}
                            onChange={(e) =>
                                handleAmountChange(user._id, e.target.value)
                            }
                            className='ml-4 p-2 border rounded w-28 outline-none focus:border-pink-600'
                            placeholder='Amount'
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SplitByAmount;
