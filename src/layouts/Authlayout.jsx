import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
const Authlayout = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded shadow-lg p-5">
        <div className="flex items-center flex-col">
          <h2 className="uppercase mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            <span className="text-7xl">Cart</span>things
            <span className="text-xs font-thin mx-2">v 1.0</span>
          </h2>
          <p className="uppercase">Your daily dose of shopping</p>
          <p className="mt-2 text-center text-sm text-gray-600">
            <br />
            {pathname.includes("register") ? (
              <Link
                to="/auth"
                replace
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Already have an account? Login here!
              </Link>
            ) : (
              <Link
                to="register"
                replace
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Don't have an account? Register here!
              </Link>
            )}
          </p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Authlayout;
