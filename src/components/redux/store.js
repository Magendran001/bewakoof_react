import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import Productreducer from "./productredux/productreducer";
import Signupreducer from "./signup/signupreducer";
import Loginreducer from "./login/loginredux";



const rootreducer = combineReducers({ product: Productreducer, Signupreducer, Loginreducer })
const store = createStore(rootreducer, applyMiddleware(thunk));

export default store

