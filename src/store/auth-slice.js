import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../link/API";

const initialState = {
  isLoggedIn: false,
  user: null,
  error: false,
  errorMessage: null,
  loading: false,
  expiresAt: null,
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
  // console.log(data);
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
      state.error = false;
      state.errorMessage = null;
      state.loading = false;
      sessionStorage.clear("nunsa_user");
    },
    updatePhoto(state, action) {
      state.user.photo = action.payload;
    },
    updateAbout(state, action) {
      state.user.about = action.payload;
    },
    tokenExpiry(state, action) {
      state.expiresAt = action.payload.tokenExpiry;
    },
    stopLoad(state, action) {
      state.loading = false;
    },
    deleteError(state, action) {
      state.error = false;
      state.errorMessage = null;
      state.errorRoute = null;
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
      state.expiresAt = Number(payload.expiresAt);
      sessionStorage.setItem("nunsa_user", payload.user.token);
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
