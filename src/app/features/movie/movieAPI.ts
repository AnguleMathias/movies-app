import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRandomMovies } from "../../../sdk/src/movies/movieSdk";

export const fetchRandomMovies = createAsyncThunk(
  "movies/fetchRandom",
  async () => {
    const response = await getRandomMovies();
    console.log("response", response)
    return response.results;
  }
);
    