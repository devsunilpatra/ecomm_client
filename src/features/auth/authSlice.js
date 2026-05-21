import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserApi, loginUserApi } from "./authApi";

// Register
export const registerUser = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      return await registerUserApi(formData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Response failed",
      );
    }
  },
);

// Login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      return await loginUserApi(formData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed",
      );
    }
  },
);

/*  Logout */
// export const logoutUser = createAsyncThunk("auth/logout", async () => {
//   await logoutApi();
// });

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    accessToken: null,
    loading: false,
    error: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    logout: (state) => {
      ((state.accessToken = null), (state.user = null));
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.user;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        // localStorage.setItem("accessToken", action.payload.accessToken)
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // logout
    //   .addCase(logoutUser.fulfilled, (s) => {
    //     s.user = null;
    //     s.accessToken = null;
    //   });
  },
});

export const { logout, setAccessToken } = authSlice.actions;
export default authSlice.reducer;
