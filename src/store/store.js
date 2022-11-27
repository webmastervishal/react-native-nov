import { createStore, combineReducers, applyMiddleware } from "redux";
import currencyReducer from "./../components/reducer";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  currency: currencyReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

console.log("store", store.getState());

export default store;
