// rootReducer.js
import { combineReducers } from "redux"
import authReducer from "./authReducer"
import golobalReducer from "./globalReducer"

const rootReducer = combineReducers({
  user: authReducer,
  products: golobalReducer
})

export default rootReducer
