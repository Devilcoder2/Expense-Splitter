import { RxAvatar } from "react-icons/rx";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const SplitterHeader = (props) => {
  return (
    <div className="flex justify-between pt-3 items-center ">
      {/* Backbutton  */}
      <div className="hover:cursor-pointer">
        <h4>
          <IoIosArrowRoundBack fontSize={"40px"} />
        </h4>
      </div>

      {/* Group Name  */}
      <div className="flex items-center hover:cursor-pointer">
        <h3 className="mr-2">
          <RxAvatar fontSize={"40px"} />
        </h3>
        <h1 className=" text-xl">{props.groupName}</h1>
      </div>

      {/* Owned by you / to  */}
      <div className="hover:cursor-pointer">
        <h1>
          <FaMoneyBillTransfer fontSize={"40px"} />
        </h1>
      </div>
    </div>
  );
};

export default SplitterHeader;
