import { configureStore } from "@reduxjs/toolkit";

import movieReducer from "./features/movie/movieSlice";
import movieDetailsReducer from "./features/movie/movieDetailsSlice";
import movieSearchReducer from "./features/movie/movieSearchSlice";

const store = configureStore({
  reducer: {
    movie: movieReducer,
    movieDetails: movieDetailsReducer,
    movieSearch: movieSearchReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
