import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getRandomMovies,
  getMovieDetails,
} from "../../../sdk/src/movies/movieSdk";
import { MovieDetails } from "./movieDetailsType";

/**
 * Fetches random movies
 * @returns {Promise<any[]>} - Random movies
 */
export const fetchRandomMovies = createAsyncThunk(
  "movies/fetchRandom",
  async () => {
    const response = await getRandomMovies();
    return response.results;
  }
);

/**
 * Fetches details for a specific movie
 * @param {string} movieId - The ID of the movie to fetch details for
 * @returns {Promise<MovieDetails>} - The detailed information of the movie or an error message
 */
export const fetchMovieDetails = createAsyncThunk<
  MovieDetails,
  string,
  {
    rejectValue: string;
  }
>("movies/fetchDetails", async (id: string, { rejectWithValue }) => {
  try {
    const response = await getMovieDetails(id);
    if (response instanceof Error) {
      // If the response is an error, handle it appropriately
      return rejectWithValue("Failed to fetch movie details");
    }
    return response;
  } catch (error) {
    // Handle any other errors that might occur during the API call
    return rejectWithValue("Failed to fetch movie details");
  }
});
