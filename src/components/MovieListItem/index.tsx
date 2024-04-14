import { FC } from "react";
import {
  Button,
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
    <Grid item xs={2.4} sm={2.4} md={2.4}>
      <Card
        sx={{
          height: 750,
          width: 350,
          transition: "0.3s",
          ":hover": {
            boxShadow:
              "0 4px 20px 0 rgba(0,0,0,0.12), 0 9px 10px -6px rgba(0,0,0,0.20)",
          },
        }}
      >
        <CardMedia
          style={{ height: 600 }}
          image={movie["#IMG_POSTER"]}
          title={movie["#TITLE"]}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h3"
            style={{
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
        </CardContent>
        <CardActions>
          <Button variant="outlined">More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MovieListItem;
