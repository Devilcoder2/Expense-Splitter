/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Import an icon for a more stylish close button

const ProfileSidebar = () => {
    const [userDetails, setUserDetails] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const getMyProfileHandler = async () => {
        const token = localStorage.getItem('token');
        const response = await axios.get(
            'http://localhost:3000/user/myProfile',
            {
                headers: {
                    Authorization: token,
                },
            }
        );

        setUserDetails(response.data.user);
        setIsModalVisible(true);
    };

    const closeModalHandler = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <div>
                <div className='flex items-center justify-center py-2'>
                    <button onClick={getMyProfileHandler} className='button-86'>
                        Profile
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalVisible && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300'>
                    <div className='bg-white p-8 rounded-2xl shadow-2xl relative w-full max-w-md animate-fade-in'>
                        {/* Close Button */}
                        <button
                            onClick={closeModalHandler}
                            className='absolute top-3 right-3 text-gray-600 hover:text-black focus:outline-none'
                        >
                            <FaTimes className='text-2xl' />
                        </button>

                        {/* User Details */}
                        {userDetails && (
                            <div className='space-y-4'>
                                <h2 className='text-2xl font-bold text-center text-gray-800 mb-4'>
                                    {userDetails.name}'s Profile
                                </h2>
                                <div className='flex justify-between items-center bg-indigo-100 p-4 rounded-lg'>
                                    <span className='font-medium text-gray-700'>
                                        Owed to me:
                                    </span>
                                    <span className='font-bold text-indigo-600'>
                                        {userDetails.totalOwedToMe}
                                    </span>
                                </div>
                                <div className='flex justify-between items-center bg-red-100 p-4 rounded-lg'>
                                    <span className='font-medium text-gray-700'>
                                        Owed by you:
                                    </span>
                                    <span className='font-bold text-red-600'>
                                        {userDetails.totalOwedByYou}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileSidebar;
