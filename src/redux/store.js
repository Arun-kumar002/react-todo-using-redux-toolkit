// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import { createReducer } from './reducer';
// // de
// export const store = createStore(createReducer, applyMiddleware(thunk))

import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";


export  let store=configureStore({reducer})