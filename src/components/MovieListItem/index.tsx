import { FC } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import { Movie } from "../../app/features/movie/movieTypes";

interface MovieListItemProps {
  movie: Movie;
}

const MovieListItem: FC<MovieListItemProps> = ({ movie }: { movie: Movie }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <CardMedia
          style={{ height: 300 }}
          image={movie["#IMG_POSTER"]}
          title={movie["#TITLE"]}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {movie["#TITLE"]}
          </Typography>
        </CardContent>
        <CardActions>Click me</CardActions>
      </Card>
    </Grid>
  );
};

export default MovieListItem;
