import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";

export const registerFields = [
  {
    component: Input,
    id: "lname",
    name: "lname",
    type: "text",
    "data-value": "",
    autoComplete: "lname",
    className: "rounded",
    placeholder: "Last Name",
    validate: (value) => {
      if (!value) {
        return "Last name is required . . . .";
      }
      return "";
    },
  },
  {
    component: Input,
    id: "fname",
    name: "fname",
    type: "text",
    "data-value": "",
    autoComplete: "fname",
    className: "rounded",
    placeholder: "First Name",
    validate: (value) => {
      if (!value) {
        return "First name is required . . . .";
      }
      return "";
    },
  },
  {
    component: Input,
    id: "email",
    name: "email",
    type: "email",
    "data-value": "",
    autoComplete: "email",
    className: "rounded",
    placeholder: "Please enter valid email",
    validate: (value) => {
      if (!value) {
        return "Valid Email is required . . . .";
      }
      return "";
    },
  },
  {
    component: Input,
    id: "password",
    name: "password",
    type: "password",
    "data-value": "",
    autoComplete: "password",
    className: "rounded",
    placeholder: "Please enter your password",
    validate: (value) => {
      if (!value) {
        return "Password is required . . . .";
      }
      return "";
    },
  },
  {
    component: Input,
    id: "cpassword",
    name: "cpassword",
    type: "password",
    "data-value": "",
    autoComplete: "cpassword",
    placeholder: "Please confirm your password",
    validate: (value) => {
      if (!value) {
        return "Confirm Password is required . . . .";
      }
      return "";
    },
  },
  {
    component: Select,
    id: "usertype",
    name: "usertype",
    type: "text",
    "data-value": "",
    autoComplete: "usertype",
    className: "rounded",
    options: [
      {
        text: "Customer",
        value: "Customer",
      },
      {
        text: "Seller",
        value: "Seller",
      },
    ],
    validate: (value) => {
      if (!value) {
        return "Confirm Password is required . . . .";
      }
      return "";
    },
  },
];

export const registerInitValues = registerFields.reduce(
  (p, c) => ({ ...p, [c.name]: c["data-value"] }, {})
);
