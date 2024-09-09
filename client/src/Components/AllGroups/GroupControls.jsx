import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SingleGroup from './SingleGroup';

const GroupControls = () => {
    const [allGroups, setAllGroups] = useState([]);
    const [filteredAllGroups, setFilteredAllGroups] = useState([]);

    const navigate = useNavigate();

    const fetchAllGroups = async () => {
        const token = localStorage.getItem('token');
        const response = await axios.get(
            'http://localhost:3000/user/allGroups',
            {
                headers: {
                    Authorization: token,
                },
            }
        );

        setAllGroups(response.data.groupDetails);
        setFilteredAllGroups(response.data.groupDetails);
    };

    useEffect(() => {
        fetchAllGroups();
    }, []);

    const groupClickedHandler = (groupId) => {
        navigate(`/group/${groupId}`);
    };

    const searchGroupHandler = (e) => {
        const value = e.target.value.trim().toLowerCase();

        const searchedGroups = allGroups.filter((group) => {
            return group.groupName.trim().toLowerCase().includes(value);
        });

        setFilteredAllGroups(searchedGroups);
    };

    return (
        <div>
            {/* Search  */}
            <div className='flex justify-center animate__animated animate__zoomInUp'>
                <input
                    type='text'
                    id='searchGroup'
                    onChange={searchGroupHandler}
                    placeholder='Search Group'
                    className='px-4 py-3 outline-none border border-gray-600 rounded-md mt-10 mb-6 w-96 '
                />
            </div>

            {/* RENDERING OF ALL THE GROUPS  */}
            <div className=' mx-auto p-6'>
                <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>
                    Your Groups
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                    {/* Rendering Groups */}
                    {filteredAllGroups.map((group) => (
                        <div
                            key={group._id}
                            className='flex items-stretch'
                            onClick={() => {
                                groupClickedHandler(group._id);
                            }}
                        >
                            <SingleGroup name={group.groupName} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GroupControls;
