import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import storage from "redux-persist/lib/storage";
// import storageSession from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";
import persistReducer from "redux-persist/es/persistReducer";
import { combineReducers } from "@reduxjs/toolkit";
import postsSlice from "./posts-slice";

const persistConfig = {
  key: "root",
  version: 1,
  // storage: storageSession,
  storage,
};

const reducer = combineReducers({
  auth: authSlice.reducer,
  posts: postsSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
