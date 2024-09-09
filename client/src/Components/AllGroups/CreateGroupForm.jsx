/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { IoAddOutline } from 'react-icons/io5';
import { FaRegTrashAlt } from 'react-icons/fa';

const CreateGroupForm = ({ setIsFormVisible }) => {
    const [groupName, setGroupName] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
    const [users, setUsers] = useState(null); 
    const [isGroupNameError, setIsGroupNameError] = useState(false);
    const [isGroupDesError, setIsGroupDesError] = useState(false);
    const [membersError, setMembersError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchUsers = async () => {
        const response = await axios.get('http://localhost:3000/user/allUsers');
        const allUsers = response.data.users.map((user) => ({
            ...user,
            isAdded: false,
        }));
        setUsers(allUsers);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const groupNameChangeHandler = (e) => {
        setGroupName(e.target.value);
        setIsGroupNameError(false);
    };

    const groupDescriptionChangeHandler = (e) => {
        setGroupDescription(e.target.value);
        setIsGroupDesError(false);
    };

    // a + => userId
    // b -
    // c -

    // prev -> [{_id: , name: , isAdded: }, {_id: , name: , isAdded: }, {_id: , name: , isAdded: }]

    const addMemberHandler = (userId) => {
        setUsers((prev) => {
            const newUsers = prev.map((user) => {
                if (user._id === userId) {
                    return { ...user, isAdded: !user.isAdded };
                }
                return user;
            });

            return newUsers;
        });

        setMembersError(false);
    };

    const cancelModalHandler = () => {
        setIsFormVisible(false);
    };

    const formSubmitHandler = async () => {
        if (groupName.trim().length === 0) {
            setIsGroupNameError(true);
            setErrorMessage('Every group should have a name!');
            return;
        }

        if (groupDescription.trim().length === 0) {
            setIsGroupDesError(true);
            setErrorMessage('Please add a description');
            return;
        }

        const filteredMembers = users.filter((user) => user.isAdded === true);
        if (filteredMembers.length === 0) {
            setMembersError(true);
            setErrorMessage('Please add atleast 1 member!');
            return;
        }

        const addedMembers = filteredMembers.map((user) => {
            const newUserObj = {
                userId: user._id,
                name: user.name,
            };

            return newUserObj;
        });

        const token = localStorage.getItem('token');
        const body = {
            groupName: groupName,
            members: addedMembers,
        };

        const response = await axios.post(
            'http://localhost:3000/user/newGroup',
            body,
            {
                headers: {
                    Authorization: token,
                },
            }
        );

        setIsFormVisible(false);
    };

    return (
        <div className='flex flex-col'>
            {/* GROUP NAME  */}
            <div className='flex flex-col mb-4'>
                <label
                    htmlFor='groupName'
                    className='text-lg font-semibold mb-2'
                >
                    Group Name
                </label>
                <input
                    type='text'
                    name='groupName'
                    id='groupName'
                    value={groupName}
                    onChange={groupNameChangeHandler}
                    placeholder='Enter Group Name'
                    className='outline-none px-4 py-2 border border-gray-700 rounded-md '
                />

                {isGroupNameError && (
                    <div className='text-red-600 mt-1'>{errorMessage}</div>
                )}
            </div>

            {/* GROUP DESCRIPTION  */}
            <div className='flex flex-col'>
                <label
                    htmlFor='groupDescription'
                    className='text-lg font-semibold mb-2'
                >
                    Group Description
                </label>
                <input
                    type='text'
                    name='groupDescription'
                    id='groupDescription'
                    value={groupDescription}
                    onChange={groupDescriptionChangeHandler}
                    placeholder='Enter Description for group'
                    className='outline-none px-4 py-2 border border-gray-700 rounded-md '
                />

                {isGroupDesError && (
                    <div className='text-red-600 mt-1'>{errorMessage}</div>
                )}
            </div>

            {/* ALL USERS LIST  */}
            <div className='my-5 space-y-2 h-60  overflow-y-scroll scrollbar-hide'>
                {membersError && (
                    <div className='text-red-600 -mt-2'>{errorMessage}</div>
                )}
                {users !== null &&
                    users.map((user) => {
                        return (
                            <div
                                key={user._id}
                                className='flex justify-between'
                            >
                                <div>{user.name}</div>

                                <div
                                    onClick={() => {
                                        addMemberHandler(user._id);
                                    }}
                                    className={`${
                                        user.isAdded
                                            ? 'bg-red-700'
                                            : 'bg-gray-500'
                                    } w-6 h-6 text-white rounded-md px-1 py-1 text-center cursor-pointer`}
                                >
                                    {user.isAdded ? (
                                        <FaRegTrashAlt />
                                    ) : (
                                        <IoAddOutline />
                                    )}
                                </div>
                            </div>
                        );
                    })}
            </div>

            {/* SUBMIT & CANCEL BUTTON  */}
            <div className='flex mt-8 justify-between'>
                <div
                    onClick={cancelModalHandler}
                    className=' bg-red-700 px-3 py-2 rounded-md text-white hover:cursor-pointer'
                >
                    Cancel
                </div>

                <div
                    onClick={formSubmitHandler}
                    className=' bg-[#232534] px-3 py-2 rounded-md text-white hover:cursor-pointer'
                >
                    Submit
                </div>
            </div>
        </div>
    );
};

export default CreateGroupForm;
