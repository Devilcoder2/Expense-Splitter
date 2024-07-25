import PropTypes from "prop-types";

const Debts = ({ debts }) => (
  <div className="flex space-x-8 ml-10 border border-gray-300 rounded-md p-2">
    <div className="text-center ">
      <div className="text-lg font-semibold text-gray-700">
        ₹{debts.owedByYou}
      </div>
      <div className="text-sm font-light text-gray-600">Owed by you</div>
    </div>
    <div className="text-center">
      <div className="text-lg font-semibold text-gray-700">
        ₹{debts.owedToMe}
      </div>
      <div className="text-sm font-light text-gray-600">Owed to you</div>
    </div>
  </div>
);

Debts.propTypes = {
  debts: PropTypes.shape({
    owedByYou: PropTypes.number.isRequired,
    owedToMe: PropTypes.number.isRequired,
  }).isRequired,
};

export default Debts;
