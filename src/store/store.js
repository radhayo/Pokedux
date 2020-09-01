/*import { createStore } from "redux";
import rootReducer from "./reducer";
 
export default createStore(rootReducer);*/


import thunk from "redux-thunk"
import React from "react"
import { createStore, applyMiddleware } from 'redux'
import reducer from "./reducer";
import { Provider } from "react-redux";
import initialState from "./initialState";

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default props => <Provider store={store} {...props}/>;