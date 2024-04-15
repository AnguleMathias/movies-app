import { FC } from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar";
import { AppDispatch } from "../../app/store";
import { useDispatch } from "react-redux";
import { clearSearchResults } from "../../app/features/movie/movieSearchSlice";

const Navigation: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleRedirectToHome = () => {
    navigate("/");
    dispatch(clearSearchResults());
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Button color="inherit" onClick={handleRedirectToHome}>
          Home
        </Button>
        <SearchBar />
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
