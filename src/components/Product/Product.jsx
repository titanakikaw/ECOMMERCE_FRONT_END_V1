import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Product = ({ product, seller }) => {
  return (
    <div className="">
      <Link
        to={`/ProductInfo/${product.id}`}
        className="group relative flex flex-col hover:bg-white-100"
      >
        <div>
          <div
            className="rounded-md group-hover:opacity-75 lg:aspect-none lg:h-60"
            style={{
              width: "100%",
              height: "180px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <img
              src={product.image_url}
              style={{
                flexShrink: "0",
                maxWidth: "70%",
                maxHeight: "90%",
              }}
              alt={product.title}
            />
          </div>
        </div>
        <div className="px-2 flex flex-col justify-between h-full rounded-b">
          <div>
            <p className="text-xs text-gray-700">{product.name}</p>
          </div>
          <p className="text-sm font-medium text-gray-900 text-base">
            {product.general_price}
          </p>
          <div className="mt-4">
            <h4 className="sr-only">Reviews</h4>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      product.ratings?.average > rating
                        ? "text-gray-900"
                        : "text-gray-200",
                      "h-5  flex-shrink-0 w-3"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="text-xs"> {product.ratings.count} reviews</p>
            </div>
          </div>
        </div>
      </Link>
      {seller && (
        <div className="mt-4 grid gap-1 grid-cols-2">
          <button className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-400 py-2 px-4 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:bg-green-400 focus:ring-offset-2 ">
            Edit
          </button>
          <button className=" group relative flex w-full justify-center rounded-md border border-transparent bg-red-400 py-2 px-4 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:bg-orange-400 focus:ring-offset-2 ">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
