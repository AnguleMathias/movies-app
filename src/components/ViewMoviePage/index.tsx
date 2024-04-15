import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CardContent, Typography, Alert, Grid } from "@mui/material";
import { fetchMovieDetails } from "../../app/features/movie/movieAPI";
import { AppDispatch, RootState } from "../../app/store";
import { styled } from "@mui/material/styles";
import Loader from "../Loader";
import { MovieDetails as MovieData } from "../../app/features/movie/movieDetailsType";

const StyledGrid = styled(Grid)({
  backgroundColor: "#fff",
  padding: "20px 20px 0 0",
});

const StyledGridItem = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

const StyledImage = styled("img")({
  maxWidth: "70%",
  borderRadius: "10px",
  objectFit: "contain",
});

const MovieDetails = () => {
  const { movieId } = useParams<string>();
  const [data, setData] = useState<MovieData | null>(null);

  const dispatch: AppDispatch = useDispatch();
  const movie = useSelector((state: RootState) => state.movieDetails.details);
  const loading = useSelector((state: RootState) => state.movieDetails.loading);
  const error = useSelector((state: RootState) => state.movieDetails.error);

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieDetails(movieId));
    }
  }, [dispatch, movieId]);

  useEffect(() => {
    if (movie) {
      setData(movie as MovieData);
    }
  }, [movie]);

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (loading === "pending") {
    return <Loader />;
  }

  return (
    <StyledGrid>
      {data?.fake && (
        <Grid container>
          <StyledGridItem item xs={12} md={5}>
            <StyledImage
              src={data.fake["#IMG_POSTER"]}
              alt={data.fake["#TITLE"]}
              height="70%"
            />
          </StyledGridItem>
          <Grid item xs={12} md={7}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {data.fake["#TITLE"]}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ★ {data.fake["#RANK"].toFixed(1)} | {data.fake["#YEAR"]} | 94
                min
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>THE GENRES</strong>
              </Typography>
              <Typography paragraph variant="body2" color="text.primary">
                {data?.storyLine.genres.genres
                  .map((genre) => genre?.text)
                  .join(", ")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>THE SYNOPSIS</strong>
              </Typography>
              <Typography paragraph variant="body2" color="text.primary">
                {data.storyLine?.outlines?.edges[0]?.node.plotText?.plaidHtml}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>THE ACTORS</strong>
              </Typography>
              <Typography paragraph variant="body2" color="text.primary">
                {data.fake["#ACTORS"]}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      )}
    </StyledGrid>
  );
};

export default MovieDetails;
