/* eslint-disable react/prop-types */
import { FaUsers } from 'react-icons/fa'; // Importing a static group icon

const SingleGroup = ({ name }) => {
    return (
        <div className='flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 hover:cursor-pointer'>
            {/* Static Group Icon */}
            <FaUsers className='text-pink-600 text-2xl' />

            {/* Group Name */}
            <span className='text-lg font-semibold text-gray-800'>{name}</span>
        </div>
    );
};

export default SingleGroup;
