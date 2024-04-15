import { createSlice } from "@reduxjs/toolkit";

import { searchMovies } from "./movieAPI";
import { MovieSearchState } from "../types/movieTypes";

const initialState: MovieSearchState = {
  movies: {},
  loading: "idle",
};

const movieSearchSlice = createSlice({
  name: "movieSearch",
  initialState,
  reducers: {
    clearSearchResults(state) {
      state.movies = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.movies = action.payload;
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.loading = "failed";
      });
  },
});
export const { clearSearchResults } = movieSearchSlice.actions;

export default movieSearchSlice.reducer;
