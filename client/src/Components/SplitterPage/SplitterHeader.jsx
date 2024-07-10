import { RxAvatar } from "react-icons/rx";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const SplitterHeader = () => {
  return (
    <div className="flex justify-between mt-3 items-center">
      {/* Backbutton  */}
      <div>
        <h4>
          <IoIosArrowRoundBack fontSize={"30px"} />
        </h4>
      </div>

      {/* Group Name  */}
      <div className="flex items-center">
        <h3>
          <RxAvatar fontSize={"30px"} />
        </h3>
        <h1>Group Name</h1>
      </div>

      {/* Owned by you / to  */}
      <div>
        <h1>
          <FaMoneyBillTransfer fontSize={"30px"} />
        </h1>
      </div>
    </div>
  );
};

export default SplitterHeader;
