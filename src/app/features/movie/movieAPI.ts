import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRandomMovies } from "ma-movies-sdk";

export const fetchRandomMovies = createAsyncThunk(
  "movies/fetchRandom",
  async () => {
    const response = await getRandomMovies();
    return response.results;
  }
);
