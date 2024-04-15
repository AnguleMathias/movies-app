import { FC } from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

import { Movie } from "../../app/features/movie/movieTypes";

interface MovieListItemProps {
  movie: Movie;
}

const MovieListItem: FC<MovieListItemProps> = ({ movie }: { movie: Movie }) => {
  // redirect to movie details page
  const handleViewMovie = () => {
    window.location.href = `/movie/${movie["#IMDB_ID"]}`;
  };

  return (
    <Grid item xs={2.4} sm={2.4} md={2.4}>
      <Card
        sx={{
          height: 700,
          width: 350,
          transition: "0.4s",
          ":hover": {
            boxShadow:
              "0 4px 20px 0 rgba(0,0,0,0.12), 5px 9px 10px 9px rgba(0,0,0,0.20)",
            background: "#37474f",
            color: "#fff",
            cursor: "pointer",
          },
        }}
        onClick={handleViewMovie}
      >
        <CardMedia
          style={{ height: 600 }}
          image={movie["#IMG_POSTER"]}
          title={movie["#TITLE"]}
        />
        <CardContent style={{ justifyContent: "center", alignItems: "center" }}>
          <Grid container justifyContent="center" alignItems="center" gap={1}>
            <Typography
              gutterBottom
              variant="body1"
              justifyContent="center"
              alignItems="center"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                height: "4rem",
              }}
            >
              {movie["#TITLE"]}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MovieListItem;
