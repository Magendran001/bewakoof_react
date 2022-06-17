import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import Productreducer from "./productredux/productreducer";
import Signupreducer from "./signup/signupreducer";



const rootreducer = combineReducers({ product: Productreducer, Signupreducer })
const store = createStore(rootreducer, applyMiddleware(thunk));

export default store

