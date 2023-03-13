import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Product from "../../components/Product/Product";

const Home = ({ products }) => {
  const categories = products.reduce((p, c) => {
    if (!p.includes(c.category)) {
      return [...p, c.category];
    }
    return p;
  }, []);

  return (
    <div>
      <div className="filter my-5">
        <p className="font-medium uppercase tracking widest">Categories</p>
        <div className="categoryList grid grid-cols-4  gap-x-1 sm:grid-cols-4 lg:grid-cols-6 xl:gap-x-3 pb-3">
          {categories?.map((x, index) => {
            return (
              <button
                key={index}
                type="submit"
                className="mt-1 flex w-full items-center justify-center rounded border border-transparent bg-indigo-600 py-3 px-5 text-xs  text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 uppercase tracking-wide"
              >
                {x}
              </button>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="mt-6 grid grid-cols-1 gap-y-3 gap-x-1 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-3">
        {products.map((x) => (
          <Product product={x} key={x.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ products }) => ({
  products,
});

export default connect(mapStateToProps, null)(Home);
