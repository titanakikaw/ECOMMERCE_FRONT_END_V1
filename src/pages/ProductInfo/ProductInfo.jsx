import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { StarIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import "./productInfo.css";
import axiosInstance from "../../utils/axiosInstance";
import Stock from "../../components/Stock/Stock";
import Quantity from "../../components/Quantity/Quantity";
import { connect } from "react-redux";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductInfo = ({ ADD_CART_ITEM }) => {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState(null);
  const [userProduct, setUserProduct] = useState({ qty: 1 });

  const loadCurrentProduct = async () => {
    if (!id) {
      return null;
    }
    try {
      const { data } = await axiosInstance({
        url: `products/${id}`,
        method: "get",
      });
      if (!data) {
        throw new Error("Unable to retrieve data, Please try again later");
      }

      setCurrentProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addProductCategory = ({ category, value }) => {
    setUserProduct({ ...userProduct, [category]: value });
  };

  const ADD_TO_CART = ({ productId }) => {
    ADD_CART_ITEM({ ...userProduct, productId });
  };

  useEffect(() => {
    loadCurrentProduct();
  }, []);

  return (
    <div className="mt-10">
      <div className="flex items-center rounded bg-orange-400 text-xs font-medium uppercase px-2 py-2 text-white">
        <Link to="/Home" className="hover:text-black">
          Products
        </Link>
        <ChevronRightIcon className="h-6 w-6 leading-5" aria-hidden="true" />
        <Link to="" className="hover:text-black">
          {currentProduct?.type}
        </Link>
        <ChevronRightIcon className="h-6 w-6 leading-5" aria-hidden="true" />
        <Link to="" className="hover:text-black">
          {currentProduct?.category}
        </Link>
        <ChevronRightIcon className="h-6 w-6 leading-5" aria-hidden="true" />
        <Link to="" className="hover:text-black">
          {currentProduct?.name}
        </Link>
      </div>
      <div className="mt-10">
        {currentProduct && (
          <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
            <div
              className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5"
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={currentProduct.image_url}
                alt="Two each of gray, white, and black shirts arranged on table."
                style={{
                  flexShrink: "0",
                  maxWidth: "70%",
                  maxHeight: "90%",
                }}
              />
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
              <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                {currentProduct.name}
              </h2>

              <section aria-labelledby="information-heading" className="mt-2">
                <h3 id="information-heading" className="sr-only">
                  Product information
                </h3>

                <p className="text-1xl text-gray-500">
                  {currentProduct.description}
                </p>
                <p className="text-2xl text-gray-900">
                  {currentProduct.general_price}
                </p>

                <div className="mt-6">
                  <h4 className="sr-only">Reviews</h4>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            currentProduct.ratings.average > rating
                              ? "text-gray-900"
                              : "text-gray-200",
                            "h-5  flex-shrink-0 w-3"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <a
                      href="#"
                      className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {currentProduct.ratings.count} reviews
                    </a>
                  </div>
                </div>
              </section>

              <section aria-labelledby="options-heading " className="mt-10">
                <h3 id="options-heading" className="sr-only">
                  Product options
                </h3>
                {currentProduct.sizes && (
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="col-span-1">
                      <p className="text-xs uppercase font-medium">Sizes : </p>
                    </div>
                    <div className="col-span-2 border-black">
                      <div className="actions flex items-center">
                        {currentProduct.sizes?.map((y, index) => {
                          return (
                            <label
                              className="inline-flex items-center cursor-pointer"
                              key={y}
                            >
                              <input
                                type="radio"
                                className="hidden appearance-none rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-blue-200"
                                name="radio-group-sizes"
                                value={y}
                                onClick={() =>
                                  addProductCategory({
                                    category: "size",
                                    value: {
                                      id: index,
                                      name: y,
                                    },
                                  })
                                }
                              />
                              <span className="px-8 py-2 px-2 hover:bg-gray-300 focus:bg-gray-300 transition-colors duration-300 ease-in-out uppercase text-xs font-medium border-gray-100 border">
                                {y}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
                <div
                  className={`grid grid-cols-4 gap-4 items-center ${
                    userProduct.hasOwnProperty("size") ? "" : "hidden"
                  } `}
                >
                  <div className="col-span-1">
                    <p className="text-xs uppercase font-medium">Colors : </p>
                  </div>
                  <div className="col-span-2 border-black">
                    <div className="actions flex items-center">
                      {currentProduct.variants.map((x) => {
                        return (
                          <label
                            className="inline-flex items-center cursor-pointer"
                            key={x.color}
                          >
                            <input
                              type="radio"
                              className="hidden appearance-none rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-blue-200"
                              name="radio-group-color"
                              value={x.color}
                              onClick={() =>
                                addProductCategory({
                                  category: "color",
                                  value: x.color,
                                })
                              }
                            />
                            <span className="px-8 py-2 px-2 hover:bg-gray-300 focus:bg-gray-300 transition-colors duration-300 ease-in-out uppercase text-xs font-medium border-gray-100 border">
                              {x.color}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 items-center">
                  <div className="col-span-1">
                    <p className="text-xs uppercase font-medium">
                      Available Stocks :{" "}
                    </p>
                  </div>
                  <div className="col-span-2 border-black">
                    <Stock
                      stock={currentProduct.variants.find(
                        (x) => x.color === userProduct?.color
                      )}
                      size={userProduct?.size}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 items-center">
                  <div className="col-span-1">
                    <p className="text-xs uppercase font-medium">Quantity : </p>
                  </div>
                  <div className="col-span-1 border-black py-1">
                    {
                      <Quantity
                        stock={currentProduct.variants.find(
                          (x) => x.color === userProduct?.color
                        )}
                        size={userProduct?.size}
                        userProduct={userProduct}
                        setUserProduct={setUserProduct}
                      />
                    }
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 items-center">
                  <div className="col-span-1">
                    <p className="text-2xl uppercase font-bold">Price :</p>
                  </div>
                  <div className="col-span-2 border-black">
                    <div className="actions flex items-center">
                      <p className="text-3xl uppercase px-8 py-2 px-2 uppercase font-bold">
                        {userProduct.color && userProduct.size
                          ? new Intl.NumberFormat("en-PH", {
                              style: "currency",
                              currency: "PHP",
                            }).format(
                              currentProduct.variants.find(
                                (x) => x.color === userProduct.color
                              )?.prices[userProduct?.size?.name]
                            )
                          : currentProduct.general_price}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <button
                // disabled
                disabled={
                  userProduct.hasOwnProperty("size") &&
                  userProduct.hasOwnProperty("color")
                    ? false
                    : true
                }
                onClick={() => ADD_TO_CART({ productId: currentProduct.id })}
                type="submit"
                className="appearance-none mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-400 disabled:cursor-wait"
              >
                Add to bag
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  ADD_CART_ITEM: (value) =>
    dispatch({
      type: "ADD_CART_REQUEST",
      method: "put",
      url: "cart",
      payload: value,
    }),
});

export default connect(null, mapDispatchToProps)(ProductInfo);
