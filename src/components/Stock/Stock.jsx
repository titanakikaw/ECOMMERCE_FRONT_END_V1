import React from "react";
import PropTypes from "prop-types";

const Stock = ({ stock, size }) => {
  return (
    <div className="actions flex items-center">
      <p className="text-xs uppercase font-medium px-8 py-2 px-2 uppercase text-xs font-medium border-gray-100 ">
        {stock?.stocks[size.id] || 0}
      </p>
    </div>
  );
};

Stock.propTypes = {
  size: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};

export default Stock;
