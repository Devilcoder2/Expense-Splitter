/* eslint-disable react/prop-types */
// SplitByPercent.js
import { useState } from 'react';

const SplitByPercentage = ({
    usersInGroup,
    checkedStates,
    handleCheckboxChange,
}) => {

    //state used to set percentage for each member
    const [percentages, setPercentages] = useState({});

    //handles the change in the percentage done by the user while splitting 
    const handlePercentChange = (userId, percent) => {
        setPercentages({ ...percentages, [userId]: parseFloat(percent) || 0 });
    };

    return (
        <div className='bg-white p-4 rounded-md shadow-md '>
            {/* HEADING */}
            <h2 className='text-2xl font-semibold text-white bg-pink-600 p-2 rounded mb-4'>
                Split by Percent
            </h2>

            {/* RENDERS ALL THE MEMBERS  */}
            <div className='space-y-3'>
                {usersInGroup?.map((user) => (
                    <div
                        key={user._id}
                        className='flex items-center justify-between p-3 border rounded-md bg-gray-50 hover:bg-gray-100 transition'
                    >
                        {/* RENDERS NAME FOR EACH MEMBER  */}
                        <label className='flex items-center space-x-3'>
                            <input
                                type='checkbox'
                                checked={checkedStates[user._id]}
                                onChange={() => handleCheckboxChange(user._id)}
                                className='form-checkbox h-5 w-5 text-pink-600'
                            />
                            <span className='text-gray-700'>{user.name}</span>
                        </label>

                        {/* INPUT FOR HAVING PERCENTAGE  */}
                        <input
                            type='number'
                            value={checkedStates[user._id] ?  percentages[user._id] || '' : 0}
                            onChange={(e) =>
                                handlePercentChange(user._id, e.target.value)
                            }
                            className='ml-4 p-2 border rounded w-20 outline-none focus:border-pink-600'
                            placeholder='%'
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SplitByPercentage;
