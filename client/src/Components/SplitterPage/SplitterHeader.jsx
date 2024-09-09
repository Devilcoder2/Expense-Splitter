/* eslint-disable react/prop-types */
import { RxAvatar } from 'react-icons/rx';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SplitterHeader = ({ groupDetails }) => {
    const { groupName, admin, members } = groupDetails;

    const [isNameModalOpen, setIsNameModalOpen] = useState(false);
    const [isDebtModalOpen, setIsDebtModalOpen] = useState(false);
    const [adminDetails, setAdminDetails] = useState(null);
    const [memberDetails, setMembersDetails] = useState([]);
    const [allDetails, setAllDetails] = useState(null);

    const fetchAdminDetails = async () => {
        const userIds = [admin];

        const response = await axios.get(
            'http://localhost:3000/user/usersDetailById',
            {
                params: {
                    userIds: userIds,
                },
            }
        );

        setAdminDetails(response.data.users);
    };

    const fetchMembersDetails = async () => {
        console.log('Members: ', members);
        const userIds = members.map((member) => member.userId);

        const response = await axios.get(
            'http://localhost:3000/user/usersDetailById',
            {
                params: {
                    userIds: userIds,
                },
            }
        );
        setMembersDetails(response.data.users);
        console.log(response.data.users);
    };

    useEffect(() => {
        fetchAdminDetails();
        fetchMembersDetails();
    }, []);

    useEffect(() => {
        const combined = members.map((expense) => {
            const user = memberDetails.find((u) => u._id === expense.userId);
            return {
                id: expense._id,
                userId: expense.userId,
                name: user ? user.name : '',
                owedToMe: expense.owedToMe,
                owedByYou: expense.owedByYou,
            };
        });
        console.log(combined);
        setAllDetails(combined);
    }, [members, memberDetails]);

    const openModalHandler = () => {
        setIsNameModalOpen(true);
    };

    const closeModalHandler = () => {
        setIsNameModalOpen(false);
    };

    const openDebtsModalHandler = () => {
        setIsDebtModalOpen(true);
    };

    const closeDebtModalHandler = () => {
        setIsDebtModalOpen(false);
    };

    return (
        <div className='flex justify-between pt-3 items-center bg-gray-100 px-4 py-2 rounded-md shadow-md'>
            {/* Back Button */}
            <div className='hover:cursor-pointer'>
                <IoIosArrowRoundBack
                    fontSize='40px'
                    className='text-pink-600'
                />
            </div>

            {/* Group Name */}
            <div
                className='flex items-center hover:cursor-pointer'
                onClick={openModalHandler}
            >
                <RxAvatar fontSize='40px' className='mr-2 text-pink-600' />
                <h1 className='text-xl font-bold text-gray-800'>{groupName}</h1>
            </div>

            {/* Owned by you / to */}
            <div className='hover:cursor-pointer'>
                <FaMoneyBillTransfer
                    fontSize='40px'
                    className='text-pink-600'
                    onClick={openDebtsModalHandler}
                />
            </div>

            {/* GROUP NAME Modal */}
            {isNameModalOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
                    <div className='bg-white rounded-lg p-6 w-11/12 max-w-lg shadow-2xl transform transition-all duration-300 scale-105'>
                        <h2 className='text-2xl font-semibold mb-4 text-center text-pink-600'>
                            {groupName} Details
                        </h2>

                        {/* Admin Details */}
                        <div className='mb-6'>
                            <h3 className='text-lg font-medium text-gray-700'>
                                Admin:{' '}
                                <span className='text-gray-800'>
                                    {adminDetails !== null &&
                                        adminDetails[0]?.name}
                                </span>
                            </h3>
                        </div>

                        {/* Members List */}
                        <div className='mb-6'>
                            <h3 className='text-lg font-medium text-gray-700 mb-2'>
                                Members of the Group:
                            </h3>
                            <div className='max-h-40 scrollbar-hide  overflow-y-auto space-y-3'>
                                {memberDetails.map((member) => (
                                    <div
                                        key={member._id}
                                        className='flex items-center justify-between bg-pink-50 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200'
                                    >
                                        <span className='text-gray-800'>
                                            {member.name}
                                        </span>
                                        <button className='text-red-500 hover:text-red-700 transition'>
                                            Delete
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Add new member button  */}
                        <button
                            className='mt-4 text-pink-600 bg-white border border-pink-600 px-6 py-2 rounded-full hover:bg-gray-100 transition w-full shadow-md hover:shadow-lg transform hover:scale-105'
                            onClick={closeModalHandler}
                        >
                            ADD NEW MEMBER
                        </button>

                        {/* Close Button */}
                        <button
                            className='mt-4 bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition w-full shadow-md hover:shadow-lg transform hover:scale-105'
                            onClick={closeModalHandler}
                        >
                            CLOSE
                        </button>
                    </div>
                </div>
            )}

            {/* DEBT MONEY MODAL */}
            {isDebtModalOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
                    <div className='bg-white rounded-lg p-6 w-11/12 max-w-lg shadow-2xl transform transition-all duration-300 scale-105'>
                        <h2 className='text-2xl font-semibold mb-4 text-center text-pink-600'>
                            EXPENSES
                        </h2>

                        <div className='space-y-4 max-h-60 overflow-y-auto scrollbar-hide'>
                            {allDetails !== null &&
                                allDetails.map((member) => (
                                    <div
                                        key={member.id}
                                        className='bg-pink-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 transform hover:scale-105'
                                    >
                                        <h1 className='text-lg font-bold text-pink-600'>
                                            {member.name}
                                        </h1>
                                        <div className='flex justify-between mt-2'>
                                            <h4 className='text-gray-700'>
                                                Owed by you:{' '}
                                                <span className='font-semibold text-red-500'>
                                                    {member.owedByYou}
                                                </span>
                                            </h4>
                                            <h4 className='text-gray-700'>
                                                Owed to me:{' '}
                                                <span className='font-semibold text-green-500'>
                                                    {member.owedToMe}
                                                </span>
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                        </div>

                        {/* Close Button */}
                        <button
                            className='mt-6 bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition w-full shadow-md hover:shadow-lg transform hover:scale-105'
                            onClick={closeDebtModalHandler}
                        >
                            CLOSE
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SplitterHeader;
