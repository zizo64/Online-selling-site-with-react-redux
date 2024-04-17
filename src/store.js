import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {productReducer, eachproductReducer, basketReducer ,userReducer,numberReducer,
  priceReducer,orderReducer,eachorderReducer,addressReducer} from "./reducer";
const reducers = combineReducers({
  product: productReducer,
  eachproduct: eachproductReducer,
  basket: basketReducer,
  user: userReducer,
  number: numberReducer,
  price: priceReducer,
  order: orderReducer,
  eachorder:eachorderReducer,
  address:addressReducer,
  

});
const middleware = [thunk];

  const localstorageusers = JSON.parse(localStorage.getItem("users")) 
  ? JSON.parse(localStorage.getItem("users"))
  : {}; 
  const localstoragebasket =JSON.parse(localStorage.getItem("basket")) 
  ? JSON.parse(localStorage.getItem("basket"))
  : []; 
  const localstoragenumber =JSON.parse(localStorage.getItem("number")) 
  ? JSON.parse(localStorage.getItem("number"))
  : 0; 
  const localstorageprice =JSON.parse(localStorage.getItem("price")) 
  ? JSON.parse(localStorage.getItem("price"))
  : 0;
const initialState = {
 user:{ user: localstorageusers,  error: "" },
 basket: localstoragebasket,
 number: localstoragenumber,
 price: localstorageprice
};
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
