import todoReducer from "./todoReducer";

import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    todoReducer
})

export default rootReducer;