import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchMovieDetails } from "./movieAPI";
import { MovieDetailsState } from "./movieTypes";
import { MovieDetails } from "./movieDetailsType";

const initialState: MovieDetailsState = {
  details: {},
  loading: "idle",
  error: null,
};

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        fetchMovieDetails.fulfilled,
        (state, action: PayloadAction<MovieDetails>) => {
          state.details = action.payload;
          state.loading = "succeeded";
        }
      )
      .addCase(fetchMovieDetails.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export default movieDetailsSlice.reducer;
