import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchRandomMovies } from "./movieAPI";
import { MovieState } from "../types/movieTypes";

const initialState: MovieState = {
  entities: [],
  loading: "idle",
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomMovies.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        fetchRandomMovies.fulfilled,
        (state, action: PayloadAction<any[]>) => {
          state.entities = action.payload;
          state.loading = "succeeded";
        }
      )
      .addCase(fetchRandomMovies.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export default movieSlice.reducer;
