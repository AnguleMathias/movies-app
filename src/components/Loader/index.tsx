import { FC } from "react";
import { CircularProgress, Grid } from "@mui/material";

const Loader: FC = () => (
  <Grid
    container
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: "90vh" }}
  >
    <CircularProgress />
  </Grid>
);

export default Loader;
