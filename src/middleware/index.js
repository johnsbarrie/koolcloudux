import { applyMiddleware } from "redux"
//import { createLogger } from 'redux-logger'

import apiMiddleware from "./api"

const errorMiddleWare = (store) => (next) => (action) => {
  try {
    next(action);
  } catch (e) {
    console.log('ErrorMiddleWare!!', e);
  }
}

export default applyMiddleware(apiMiddleware, errorMiddleWare);