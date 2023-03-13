import React, { useRef, useEffect } from "react";

const Quantity = ({ stock, size, userProduct, setUserProduct }) => {
  const pRef = useRef();

  useEffect(() => {
    setUserProduct({ ...userProduct, qty: 1 });
  }, [stock?.stocks[size.id]]);

  return (
    <div className="actions flex items-center justify-between">
      <button
        type="submit"
        className=" flex  items-center justify-center rounded border border-transparent border-gray-200 py-1 px-3 text-base font-medium text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        disabled={stock?.stocks[size.id] <= userProduct.qty && true}
        onClick={() =>
          setUserProduct({ ...userProduct, qty: userProduct.qty + 1 })
        }
      >
        +
      </button>
      <p className="font-medium text-xl" ref={pRef}>
        {userProduct.qty}
      </p>
      <button
        type="submit"
        className="flex items-center justify-center rounded border border-transparent text-black border-gray-200 py-1 px-3 text-base font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled"
        disabled={userProduct.qty === 0 ? true : false}
        onClick={() => {
          setUserProduct({ ...userProduct, qty: userProduct.qty - 1 });
        }}
      >
        -
      </button>
    </div>
  );
};

export default Quantity;
