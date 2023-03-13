export const cartInitValue = [];

export const cartReducer = (state = cartInitValue, { type, payload }) => {
  switch (type) {
    case "LOAD_CART_SUCCESS":
      return payload;
    case "ADD_CART_SUCCESS":
      return [...state, payload];
    case "UPDATE_CART_SUCCESS":
      const index = state.findIndex((x) => x.id === payload.id);
      return [...state.splice(0, index), payload, ...state.splice(index + 1)];

    default:
      return state;
  }
};
