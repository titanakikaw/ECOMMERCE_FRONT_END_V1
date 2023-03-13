import React from "react";
import { Link } from "react-router-dom";
import CustomForm from "../../components/Form/Forms";
import { loginFields, loginInitValues } from "./LoginFields";
const Login = () => {
  return (
    <CustomForm
      initialValues={loginInitValues}
      fields={loginFields}
      btnText="Sign In"
    >
      <p className="mt-2 text-center text-sm text-gray-600">
        Or
        <br />
        <Link
          to="register"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          start your 14-day free trial
        </Link>
      </p>
    </CustomForm>
  );
};

export default Login;
