export const productInitValue = [];

export const productReducer = (state = productInitValue, { type, payload }) => {
  switch (type) {
    case "LOAD_PRODUCTS_SUCCESS":
      return payload;

    default:
      return state;
  }
};
