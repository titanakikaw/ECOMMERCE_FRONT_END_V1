import React from "react";
import { connect } from "react-redux";
import Product from "../../components/Product/Product";

const Seller = ({ myProducts }) => {
  return (
    <div className="pt-5">
      <div className="mt-2 border py-7 px-3">
        <p className="text-3xl uppercase font-medium">
          Christian Marvin T. Orsua
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-y-3 gap-x-1 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-3">
        {myProducts?.map((x) => (
          <Product product={x} key={x.id} seller={true} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = ({ myProducts }) => ({
  myProducts,
});
export default connect(mapStateToProps, null)(Seller);
