import { configureStore } from "@reduxjs/toolkit";

import movieReducer from "./features/movie/movieSlice";
import movieDetailsReducer from "./features/movie/movieDetailsSlice";

const store = configureStore({
  reducer: {
    movie: movieReducer,
    movieDetails: movieDetailsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
