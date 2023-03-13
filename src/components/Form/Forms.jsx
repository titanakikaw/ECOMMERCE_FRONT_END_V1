import React from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { Form, Formik, Field } from "formik";
const CustomForm = ({ fields, btnText, children, ...props }) => {
  return (
    <Formik {...props}>
      {({ isSubmitting, errors }) => (
        <Form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md">
            {fields.map((x) => {
              return <Field {...x} key={x.name} />;
            })}
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:bg-orange-400 focus:ring-offset-2 "
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 bg-orange-400 group-hover:bg-orange-600"
                  aria-hidden="true"
                />
              </span>
              {btnText}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;
