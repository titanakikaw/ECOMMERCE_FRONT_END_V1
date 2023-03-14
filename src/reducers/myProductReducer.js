export const myProductInitValue = [];

export const myProductReducer = (
  state = myProductInitValue,
  { type, payload }
) => {
  switch (type) {
    case "LOAD_MY_PRODUCTS_SUCCESS":
      return payload;

    default:
      return state;
  }
};
