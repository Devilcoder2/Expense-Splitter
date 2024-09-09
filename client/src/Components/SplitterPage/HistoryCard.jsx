import { LuClock } from 'react-icons/lu';
import { GoDotFill } from 'react-icons/go';
import { FaUserGroup } from 'react-icons/fa6';

const HistoryCard = ({ description, totalAmount, day, month, isSameUser }) => {
    return (
        <div
            className={`mt-10 bg-gradient-to-r from-pink-500 to-pink-400 w-[25%] h-[21vh] my-4 p-4 rounded-2xl shadow-lg transform transition-transform hover:scale-105 ${
                isSameUser ? 'ml-auto mr-[3%]' : 'ml-10'
            } space-y-3`}
        >
            {/* Expense Description */}
            <div>
                <h1 className='text-lg font-semibold text-white'>
                    Requested for <q>{description}</q>
                </h1>
            </div>

            {/* Total Amount */}
            <div>
                <h1 className='font-bold text-3xl text-white'>
                    ₹{totalAmount}
                </h1>
            </div>

            {/* Users in the expense */}
            <div className='flex items-center text-white'>
                <FaUserGroup fontSize={'20px'} />
                <span className='ml-2 text-sm font-medium'>Participants</span>
            </div>

            {/* Progress Bar */}
            <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-white'>
                <div
                    className='bg-pink-300 h-2.5 rounded-full'
                    style={{ width: '50%' }}
                ></div>
            </div>

            {/* Paid or not paid + date of split */}
            <div className='flex items-center text-black text-sm space-x-2 mt-2'>
                <div className='flex items-center'>
                    <LuClock />
                    <span className='ml-1'>0 of 2 paid</span>
                </div>
                <GoDotFill />
                <div>
                    <h2>
                        {day} {month}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default HistoryCard;
