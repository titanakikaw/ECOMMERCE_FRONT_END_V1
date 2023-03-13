import React from "react";

const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <div className="py-1">
      <label htmlFor={props.id} className="sr-only">
        {props.placeholder}
      </label>
      <input
        {...field}
        {...props}
        required
        className={`relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
          touched[props.id] && errors[props.id] ? "border-red-500" : ""
        }`}
        placeholder={props.placeholder}
      />
      {touched[props.id] && errors[props.id] ? (
        <p className="text-xs italic text-red-500">{errors[props.id]}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
