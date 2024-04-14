import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navigation from "./components/Navigation";
import MovieList from "./components/MoviesList";

const theme = createTheme();

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<MovieList />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
