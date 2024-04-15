import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

import { AppDispatch } from "../../app/store";
import { searchMovies } from "../../app/features/movie/movieAPI";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    dispatch(searchMovies(searchTerm));
    navigate("/?q=" + searchTerm);
    setSearchTerm("");
  };

  return (
    <div>
      <TextField
        placeholder="Search for a movie..."
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
          "& .MuiInputBase-input": {
            color: "white",
          },
          "& .MuiFormLabel-root": {
            color: "grey",
          },
        }}
      />
    </div>
  );
};

export default SearchBar;
