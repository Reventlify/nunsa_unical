import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../link/API";

const initialState = {
  isLoggedIn: false,
  user: null,
  error: false,
  errorMessage: null,
  loading: false,
};

export const login = createAsyncThunk("login", async (userDetails) => {
  const response = await fetch(`${api}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails),
  });

  if (!response.ok) {
    // Handle non-200 response codes
    const data = await response.json();
    throw new Error(data); // Let Redux Toolkit handle the error
  }

  const data = await response.json();
  console.log(data);
  return data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  // initialState: initialState,
  reducers: {
    logout(state, action) {
      state.isLoggedIn = false;
      state.user = null;
    },
    loginTest(state, action) {
      state.isLoggedIn = true;
    },
    logoutTest(state, action) {
      state.isLoggedIn = false;
    },
    stopLoad(state, action) {
      state.loading = false;
    },
    deleteError(state, action) {
      state.error = false;
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    /******login******* */
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.isLoggedIn = payload.auth;
      state.user = payload.user;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = action.error.message;
      state.error = true;
    });
  },
});
export const authActions = authSlice.actions;
export const userloggedIn = (state) => state.auth.isLoggedIn;

export default authSlice;
