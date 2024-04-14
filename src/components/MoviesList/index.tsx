import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, Typography } from "@mui/material";
import { Grid } from "@material-ui/core";

import { AppDispatch, RootState } from "../../app/store";
import { fetchRandomMovies } from "../../app/features/movie/movieAPI";
import MovieListItem from "../MovieListItem";

function MovieList() {
  const dispatch: AppDispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movie.entities);
  const loading = useSelector((state: RootState) => state.movie.loading);

  useEffect(() => {
    dispatch(fetchRandomMovies());
  }, [dispatch]);

  if (loading === "pending") {
    return (
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "90vh" }}
      >
        <CircularProgress />
      </Grid>
    );
  }

  if (movies.length === 0) {
    return (
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "90vh" }}
      >
        <Typography>No movies found</Typography>
      </Grid>
    );
  }

  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <MovieListItem movie={movie} key={movie["#IMDB_ID"]} />
      ))}
    </Grid>
  );
}

export default MovieList;
