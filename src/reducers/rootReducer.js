import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { myProductReducer } from "./myProductReducer";
import { productReducer } from "./productReducer";
export default combineReducers({
  products: productReducer,
  cart: cartReducer,
  myProducts: myProductReducer,
});
