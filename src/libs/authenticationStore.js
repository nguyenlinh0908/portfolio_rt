import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import logger from "redux-logger";
import authenticationSlide from "./authenticationSlide";
export default configureStore({
  reducer: {
    authentication: authenticationSlide,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
