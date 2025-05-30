import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Envoie les identifiants à l'API et retourne le token
export const login = createAsyncThunk(
  "user/login",
  async (ids, { dispatch }) => {
    const res = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      ids
    );
    // Envoie les données utilisateur au store
    dispatch(getUserData(res.data.body.token));
    return res.data.body.token;
  }
);

// Envoie le token à l'API et retourne les données utilisateur
const getUserData = createAsyncThunk("user/getUserData", async (token) => {
  const res = await axios.post(
    "http://localhost:3001/api/v1/user/profile",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data.body;
});

// Envoie le nouveau nom d'utilisateur et le token à l'API, puis met à jour l'état
export const editUserName = createAsyncThunk(
  "user/editUserName",
  async ({ username, token }) => {
    const res = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      username,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.body;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    userData: {},
    editMode: false,
  },
  // Actions non liées à l’API
  reducers: {
    logout: (state) => {
      state.token = null;
      state.userData = {};
    },
    editMode(state, action) {
      state.editMode = action.payload;
    },
  },
  //   // Actions asynchrones thunks
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.userData = action.payload;
      })
      .addCase(editUserName.fulfilled, (state, action) => {
        state.userData = action.payload;
      });
  },
});

export const { logout, editMode } = userSlice.actions;

export default userSlice.reducer;
