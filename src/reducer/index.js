//Root Reducer
import todoReducers from "./todoreducers";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todoReducers
})

export default rootReducer

// Its move to the store.js