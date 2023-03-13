import React from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import CustomForm from "../../components/Form/Forms";
import { registerFields, registerInitValues } from "./RegisterFields";
import { connect } from "react-redux";

const Register = ({ login }) => {
  return (
    <CustomForm
      initialValues={registerInitValues}
      fields={registerFields}
      onSubmit={login}
      btnText="Register Now"
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: (value) =>
    dispatch({
      type: "LOGIN_USER_REQUEST",
      payload: value,
    }),
});

export default connect(null, mapDispatchToProps)(Register);
