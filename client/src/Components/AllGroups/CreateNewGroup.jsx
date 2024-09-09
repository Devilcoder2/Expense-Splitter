import { useState } from 'react';
import CreateGroupForm from './CreateGroupForm';

const CreateNewGroup = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const createGroupHandler = () => {
        setIsFormVisible(true);
    };

    const closeModalHandler = () => {
        setIsFormVisible(false);
    };

    return (
        <>
            <div className={`relative `}>
                <div className='flex items-center justify-center py-2 w-10 mr-4 sm:mr-20'>
                    <button
                        onClick={createGroupHandler}
                        className='relative button-86'
                    >
                        Create new group
                    </button>
                </div>
            </div>
            {/* Modal */}
            {isFormVisible && (
                <div className=' absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
                    <div className='bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md'>
                        <button
                            onClick={closeModalHandler}
                            className='absolute top-2 right-2 text-gray-600 hover:text-black'
                        >
                            &times;
                        </button>
                        <CreateGroupForm setIsFormVisible={setIsFormVisible} />
                    </div>
                </div>
            )}
        </>
    );
};

export default CreateNewGroup;
