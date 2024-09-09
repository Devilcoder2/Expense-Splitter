import ProfileSidebar from './ProfileSidebar';
import { LOGO_URL } from '../Helper/contants';
import CreateNewGroup from './CreateNewGroup';

const GroupHeader = () => {
    return (
        <div className='p-4 bg-pink-600 h-28 flex justify-between'>
            <div className='animate__animated animate__heartBeat'>
                <img
                    src={LOGO_URL}
                    alt='logo'
                    className='w-[6.5rem] sm:w-32 pt-2 sm:pt-0'
                />
            </div>

            <div className='flex justify-between'>
                <div className='mr-10'>
                    <CreateNewGroup />
                </div>
                <div>
                    <ProfileSidebar />
                </div>
            </div>
        </div>
    );
};

export default GroupHeader;
