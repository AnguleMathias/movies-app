import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { AppDispatch, RootState } from "./app/store";
import { fetchRandomMovies } from "./app/features/movie/movieAPI";

const App: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movie.entities);
  const loading = useSelector((state: RootState) => state.movie.loading);

  useEffect(() => {
    dispatch(fetchRandomMovies());
  }, [dispatch]);

  if (loading === "pending") {
    return <div>Loading...</div>;
  }

  if (movies.length === 0) {
    return <div>No movies found.</div>;
  }

  console.log(movies[0]);

  return (
    <div>
      {movies.map((movie, index) => (
        <div key={index}>
          <h2>{movie["#TITLE"]}</h2>
          <p>{movie["#YEAR"]}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
