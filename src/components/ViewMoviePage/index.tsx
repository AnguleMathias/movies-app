import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import {
  ExpandMore as ExpandMoreIcon,
  ThumbDown as ThumbDownIcon,
  ThumbUp as ThumbUpIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Typography, Alert, Grid } from "@mui/material";

import { AppDispatch, RootState } from "../../app/store";
import { capitalizeAfterComma } from "../../utils.index";
import { fetchMovieDetails } from "../../app/features/movie/movieAPI";
import { MovieDetails as MovieData } from "../../app/features/movie/movieDetailsType";
import Loader from "../Loader";

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

  console.log("movie", movie);

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
            <Grid gap={4} display="flex" flexDirection="column">
              <Grid>
                <Typography gutterBottom variant="h4" component="div">
                  {data.fake["#TITLE"]}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  ★ {data.short.aggregateRating?.ratingValue || 0} |{" "}
                  {data.fake["#YEAR"]}
                </Typography>
              </Grid>
              <Grid>
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
              </Grid>
              <Grid>
                <Typography variant="body2" color="text.secondary">
                  <strong>THE ACTORS</strong>
                </Typography>
                <Typography paragraph variant="body2" color="text.primary">
                  {data.fake["#ACTORS"]}
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="body2" color="text.secondary">
                  <strong>KEY WORDS</strong>
                </Typography>
                <Typography paragraph variant="body2" color="text.primary">
                  {capitalizeAfterComma(data.short.keywords || "")}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid sx={{ width: "100%", mt: 3, pl: 10, pr: 10 }}>
            <Typography variant="h5" gutterBottom>
              Reviews
            </Typography>
            {data &&
            data.main.featuredReviews &&
            data.main.featuredReviews.edges.length > 0 ? (
              data.main.featuredReviews.edges.map((review, index) => (
                <Accordion key={index}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id={`panel1a-header-${index}`}
                  >
                    <Typography>
                      {review.node.summary.originalText} -{" "}
                      <strong>{review.node.author.nickName}</strong> (Rating:{" "}
                      {review.node.authorRating || 'N/A'})
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid display="flex" flexDirection="column" gap={2}>
                      <Typography
                        component="div"
                        dangerouslySetInnerHTML={{
                          __html: review.node.text.originalText.plaidHtml,
                        }}
                      />
                      <Grid
                        display="flex"
                        flexDirection="row"
                        gap={2}
                        justifyContent="flex-end"
                        alignItems="center"
                      >
                        <Typography alignItems="center" variant="body2">
                          <ThumbUpIcon /> {review.node.helpfulness.upVotes}
                        </Typography>
                        <Typography alignItems="center" variant="body2">
                          <ThumbDownIcon /> {review.node.helpfulness.downVotes}
                        </Typography>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              ))
            ) : (
              <Typography>No reviews available.</Typography>
            )}
          </Grid>
        </Grid>
      )}
    </StyledGrid>
  );
};

export default MovieDetails;
