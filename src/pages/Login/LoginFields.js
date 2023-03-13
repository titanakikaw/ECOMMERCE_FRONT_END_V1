import Input from "../../components/Input/Input";

export const loginFields = [
  {
    component: Input,
    id: "email",
    name: "email",
    type: "email",
    "data-value": "",
    autoComplete: "email",
    className: "rounded-t-md",
    placeholder: "Email address",
    validate: (value) => {
      if (!value) {
        return "Please enter a email or valid email . . . . ";
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
    className: "rounded-b-md",
    placeholder: "Password",
    validate: (value) => {
      if (!value) {
        return "Password is required . . .";
      }
      return "";
    },
  },
];

export const loginInitValues = loginFields.reduce(
  (p, c) => ({
    ...p,
    [c.name]: c["data-value"],
  }),
  {}
);
