import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

const initialState = {
  isLoggedIn: false,
  user: null,
  Message: null,
  error: null,
  loading: false,
};

export const login = createAsyncThunk("login", async (userDetails) => {
  try {
    const response = await fetch(
      "https://backend-iubc.onrender.com/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      }
    );
    if (response.status !== 200) {
      // Handle non-200 response codes
      throw new Error("Bad response from server");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    // Handle network errors or exceptions
    console.error("Error occurred during login:", error);
    throw new Error("Login failed: " + error.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  // initialState,
  initialState: initialState,
  reducers: {
    addUser(state, action) {
      state.user = JSON.parse(localStorage.getItem("user"));
    },
    logout(state, action) {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("Message");
    },
  },
  extraReducers: (builder) => {
    /******login******* */
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = payload.user;
      state.Message = payload.Message;
      // localStorage.setItem("user", JSON.stringify(payload.userExist));
      // localStorage.setItem("Message", JSON.stringify(payload.Message));
    });

    builder.addCase(login.rejected, (state, { payload }) => {
      state.loading = false;
      // state.error = true
      state.error = payload.Error.message;
      // localStorage.setItem("error", JSON.stringify(payload.Error.message));
    });
  },
});
export const authActions = authSlice.actions;
export const userloggedIn = (state) => state.auth.isLoggedIn;

export default authSlice;
