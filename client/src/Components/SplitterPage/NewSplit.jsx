/* eslint-disable react/prop-types */
// NewSplit.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MdOutlineCallSplit } from 'react-icons/md';
import { TbNumber123 } from 'react-icons/tb';
import { MdPieChartOutline } from 'react-icons/md';
import { AiOutlinePercentage } from 'react-icons/ai';

import SplitEvenly from './SplitEvenly';
import SplitByAmount from './SplitByAmount';
import SplitByPercentage from './SplitByPercentage';
import SplitByShare from './SplitByShare';

const NewSplit = ({ groupMembers }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);
    const [description, setDescription] = useState('');
    const [typeOfSplit, setTypeOfSplit] = useState(1);
    const [checkedStates, setCheckedStates] = useState({});
    const [allUserIds, setAllUserIds] = useState(null);
    const [usersInGroup, setUsersInGroup] = useState(null);

    //Get all the user ids
    useEffect(() => {
        const userIds = groupMembers.map((user) => user.userId);
        setAllUserIds(userIds);
    }, [groupMembers]);

    //Get user details from the userids like name etc and initialize the checked states to true by default
    const getUsersDetails = async (allUserIds) => {
        const response = await axios.get(
            'http://localhost:3000/user/usersDetailById',
            {
                params: { userIds: allUserIds },
            }
        );

        setUsersInGroup(response.data.users);

        const initialCheckedStates = {};
        response.data.users.forEach((user) => {
            initialCheckedStates[user._id] = true;
        });
        setCheckedStates(initialCheckedStates);
    };

    useEffect(() => {
        if (allUserIds !== null) {
            getUsersDetails(allUserIds);
        }
    }, [allUserIds]);

    //to toggle the user in / out from the expense 
    const handleCheckboxChange = (userId) => {
        setCheckedStates((prevCheckedStates) => ({
            ...prevCheckedStates,
            [userId]: !prevCheckedStates[userId],
        }));
    };

    const newSplitHandler = () => setIsModalOpen(true); //to open the split modal
    const closeModalHandler = () => setIsModalOpen(false); //to close the split modal
    const totalAmountChangeHandler = (e) => setTotalAmount(e.target.value); //sets the total amount in the state variable
    const descriptionChangeHandler = (e) => setDescription(e.target.value); //sets description in the state variable

    return (
        <div className='w-full fixed bottom-16 left-[1063px]'>
            {/* SPLIT AN EXPENSE BUTTON  */}
            <div>
                <button className='button-27' onClick={newSplitHandler}>
                    Split an expense
                </button>
            </div>

            {/* NEW SPLIT FORM  */}
            {isModalOpen && (
                <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
                    <div className='bg-gray-200 w-[30rem] h-[42rem] p-6 rounded shadow-lg'>
                        <form>
                            {/* TOTAL AMOUNT  */}
                            <div className='flex flex-col'>
                                <label
                                    htmlFor='totalAmount'
                                    className='text-2xl mb-4 text-black font-bold text-center '
                                >
                                    Total Amount
                                </label>
                                <input
                                    type='number'
                                    name='totalAmount'
                                    id='totalAmount'
                                    value={totalAmount}
                                    onChange={totalAmountChangeHandler}
                                    className='w-28 text-center h-20 rounded-lg mx-auto outline-none text-black text-2xl font-semibold px-2'
                                />
                            </div>

                            {/* SPLIT DESCRIPTION  */}
                            <div className='mt-6'>
                                <label className='block ml-1 text-black text-lg font-semibold mb-2'>
                                    Description
                                </label>
                                <input
                                    type='text'
                                    value={description}
                                    onChange={descriptionChangeHandler}
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    placeholder="What's this for?"
                                />
                            </div>

                            {/* SELECTION OF TYPES OF SPLITS  */}
                            <div className='text-black flex justify-between mt-4 px-2 text-2xl'>
                                <MdOutlineCallSplit
                                    className={`hover:cursor-pointer ${
                                        typeOfSplit === 1
                                            ? 'bg-pink-500 text-white w-8 h-8 p-1 rounded-sm'
                                            : ''
                                    }`}
                                    onClick={() => setTypeOfSplit(1)}
                                />
                                <TbNumber123
                                    className={`hover:cursor-pointer ${
                                        typeOfSplit === 2
                                            ? 'bg-pink-500 text-white w-8 h-8 p-1 rounded-sm'
                                            : ''
                                    }`}
                                    onClick={() => setTypeOfSplit(2)}
                                />
                                <MdPieChartOutline
                                    className={`hover:cursor-pointer ${
                                        typeOfSplit === 3
                                            ? 'bg-pink-500 text-white w-8 h-8 p-1 rounded-sm'
                                            : ''
                                    }`}
                                    onClick={() => setTypeOfSplit(3)}
                                />
                                <AiOutlinePercentage
                                    className={`hover:cursor-pointer ${
                                        typeOfSplit === 4
                                            ? 'bg-pink-500 text-white w-8 h-8 p-1 rounded-sm'
                                            : ''
                                    }`}
                                    onClick={() => setTypeOfSplit(4)}
                                />
                            </div>

                            <div className='text-black h-72 overflow-y-scroll mt-2 px-2 font-semibold'>
                                {/* SPLIT EVENLY  */}
                                {typeOfSplit === 1 && (
                                    <SplitEvenly
                                        totalAmount={totalAmount}
                                        usersInGroup={usersInGroup}
                                        checkedStates={checkedStates}
                                        handleCheckboxChange={
                                            handleCheckboxChange
                                        }
                                    />
                                )}

                                {/* SPLIT BY AMOUNT  */}
                                {typeOfSplit === 2 && (
                                    <SplitByAmount
                                        totalAmount={totalAmount}
                                        usersInGroup={usersInGroup}
                                        checkedStates={checkedStates}
                                        handleCheckboxChange={
                                            handleCheckboxChange
                                        }
                                    />
                                )}

                                {/* SPLIT BY SHARES  */}
                                {typeOfSplit === 3 && (
                                    <SplitByShare
                                        totalAmount={totalAmount}
                                        usersInGroup={usersInGroup}
                                        checkedStates={checkedStates}
                                        handleCheckboxChange={
                                            handleCheckboxChange
                                        }
                                    />
                                )}

                                {/* SPLIT BY PERCENTAGES  */}
                                {typeOfSplit === 4 && (
                                    <SplitByPercentage
                                        totalAmount={totalAmount}
                                        usersInGroup={usersInGroup}
                                        checkedStates={checkedStates}
                                        handleCheckboxChange={
                                            handleCheckboxChange
                                        }
                                    />
                                )}
                            </div>

                            <div className='flex justify-end '>
                                {/* CANCEL BUTTON  */}
                                <button
                                    type='button'
                                    className='bg-red-600 text-white absolute bottom-12 right-[39rem] font-bold py-2 px-4 rounded mr-2'
                                    onClick={closeModalHandler}
                                >
                                    Cancel
                                </button>

                                {/* SUBMIT BUTTON  */}
                                <button className='bg-[#232534] text-white absolute bottom-12 font-bold py-2 px-4 rounded'>
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewSplit;
